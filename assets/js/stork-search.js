/*
 *
 * Copyright 2021 Adobe
 * All Rights Reserved.
 *
 * NOTICE: Adobe permits you to use, modify, and distribute this file in
 * accordance with the terms of the Adobe license agreement accompanying
 * it. If you have received this file from a source other than Adobe,
 * then your use, modification, or distribution of it requires the prior
 * written permission of Adobe.
 *
 */
const initPromise = stork.initialize("{{ .Site.BaseURL }}/stork/stork.wasm");
const downloadPromise = stork.downloadIndex("site-search-index", "{{ .Site.BaseURL }}/stork/site-index.st", {forceOverwrite: true});

var searchQuery = param("q");
if(searchQuery){
  $("#search-query").val(searchQuery);

  Promise.all([initPromise, downloadPromise])
  .then(values => {
    executeSearch(searchQuery);
  })
  .catch(error => {
    console.log("Error: " + error);
    $('#search-results').append("<p>Error on search: " + error + "</p>");
  })

  //executeSearch(searchQuery);
} else {
  $('#search-results').append("<p>Please enter a word or phrase above</p>");
}



function executeSearch(searchQuery) {
  try {
    data = stork.search("site-search-index", searchQuery);
    if (data.results.length > 0) {
      populateResults(data.results);
    } else {
      $('#search-results').append("<p>No matches found</p>");
    }
  } catch (error) {
    $('#search-results').append("<p>Error on search: " + error + "</p>");
  }
}

function populateResults(results) {
  for (i = 0; i < results.length; i++) {
    var templateDefinition = $('#search-result-template').html();
    var snippet = "";
    results[i].excerpts.forEach(excerpt => {
      snippet = snippet + "..." + excerpt.text + "...<br/>";
    });
    //replace values
    var output = render(templateDefinition,{
      key: i,
      title: results[i].entry.title,
      parent: results[i].entry.fields.parent,
      link: results[i].entry.url,
      tags: results[i].entry.fields.tags,
      snippet: snippet
    });
    $('#search-results').append(output);
    $("#summary-" + i).mark(searchQuery);
  }
}

function param(name) {
    return decodeURIComponent((location.search.split(name + '=')[1] || '').split('&')[0]).replace(/\+/g, ' ');
}

function render(templateString, data) {
  var conditionalMatches,conditionalPattern,copy;
  conditionalPattern = /\$\{\s*isset ([a-zA-Z]*) \s*\}(.*)\$\{\s*end\s*}/g;
  //since loop below depends on re.lastInxdex, we use a copy to capture any manipulations whilst inside the loop
  copy = templateString;
  while ((conditionalMatches = conditionalPattern.exec(templateString)) !== null) {
    if(data[conditionalMatches[1]]){
      //valid key, remove conditionals, leave contents.
      copy = copy.replace(conditionalMatches[0],conditionalMatches[2]);
    }else{
      //not valid, remove entire section
      copy = copy.replace(conditionalMatches[0],'');
    }
  }
  templateString = copy;
  //now any conditionals removed we can do simple substitution
  var key, find, re;
  for (key in data) {
    find = '\\$\\{\\s*' + key + '\\s*\\}';
    re = new RegExp(find, 'g');
    templateString = templateString.replace(re, data[key]);
  }
  return templateString;
}
