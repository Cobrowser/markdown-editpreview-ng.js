/* ===================================================
 * markdown-editpreview-ng.js v1.0.1
 * https://github.com/Cobrowser/markdown-editpreview-ng.js
 * ===================================================
 * Ported from http://github.com/codemwnci/markdown-editpreview-ng.js
 */

/* ===================================================
 * markdown-editpreview-ng.js v1.0.0
 * http://github.com/codemwnci/markdown-editpreview-ng.js
 * ===================================================
 * Copyright 2013-2014 Wayne Ellis
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */

// directive 
(function() { 'use strict';
  angular.module('codemwnci.markdown-edit-preview', [])
  .directive('markdown', ['$window', '$sce', function($window, $sce) {
    var converter = $window.Markdown.getSanitizingConverter(),
        _         = $window._;

    return {
      template: "<div ng-bind-html='sanitisedHtml' />",
      restrict: 'E',
      replace: true,
      scope: {   
        markdown: '=bindFrom' ,
        class: '=',
        target: '='
      },
      link: function(scope, element, attrs) {  
        scope.$watch('markdown', function(value) {
          if (value !== undefined && value !== '') {                        
            scope.html = converter.makeHtml(_.escape(value)); 
            if (attrs.target && attrs.target === '_blank') {
              scope.html = angular.element('<div>'+scope.html+'</div>').find('a').attr('target', '_blank').end().html();
            }
            scope.sanitisedHtml = $sce.trustAsHtml(scope.html);
          }
        });
      }
    };
  }])

  .directive('markdownedit', [ function() {
    return {
      restrict: 'A',
      replace: false,

      link: function(scope, element, attrs) {  
        var hiddenButtons = attrs.markdownHiddenButtons ? attrs.markdownHiddenButtons.split(',') : [];
        element.markdown({hiddenButtons: hiddenButtons});        
      },
    };
  }]);

}).call(this);
