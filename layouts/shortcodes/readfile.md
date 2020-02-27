{{/*

ADOBE CONFIDENTIAL
___________________

Copyright 2020 Adobe Systems Incorporated
All Rights Reserved.

NOTICE:  All information contained herein is, and remains
the property of Adobe Systems Incorporated and its suppliers,
if any.  The intellectual and technical concepts contained
herein are proprietary to Adobe Systems Incorporated and its
suppliers and are protected by all applicable intellectual property
laws, including trade secret and copyright laws.
Dissemination of this information or reproduction of this material
is strictly forbidden unless prior written permission is obtained
from Adobe Systems Incorporated.

*/}}
{{$file := .Get "file"}}
{{- if eq (.Get "markdown") "true" -}}
{{- $file  | readFile | markdownify -}}
{{- else if  (.Get "highlight") -}}
{{-  highlight ($file  | readFile) (.Get "highlight") "" -}}
{{- else -}}
{{ $file  | readFile | safeHTML }}
{{- end -}}
