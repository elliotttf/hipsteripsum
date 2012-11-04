/*
 * hipsteripsum
 * https://github.com/elliotttf/hipsteripsum
 *
 * Copyright (c) 2012 Elliott Foster
 * Licensed under the MIT license.
 */

var HipsterIpsum = (function() {
  /**
   * Latin words.
   */
  var latin = [
    'a','adipiscing','amet','arcu','at','auctor','bibendum','commodo','congue','curabitur','cursus','diam','donec','duis','eget','elementum','enim','eros','et','eu','fusce','gravida','in','integer','ipsum','justo','lectus','leo','ligula','lorem','maecenas','magna','malesuada','massa','mattis','mauris','metus','molestie','morbi','nam','nec','nibh','non','nulla','odio','orci','ornare','pellentesque','pharetra','porta','porttitor','proin','quam','quisque','risus','rutrum','sagittis','sapien','sed','sem','sit','sodales','tellus','tempus','ultricies','urna','ut','vitae','vivamus','vulputate'
  ];

  /**
   * Hipster words.
   */
  var hipster = [
    '+1',
    '8-bit',
    'artisan',
    'bahn mi',
    'beard',
    'before they sold out',
    'bicycle',
    'biodiesel',
    'brunch',
    'craft beer',
    'cred',
    'farm-to-table',
    'fixie',
    'food truck',
    'foodie',
    'hoodie',
    'indie',
    'keytar',
    'laserdisc',
    'mustache',
    'noise-rock',
    'organic',
    'specs',
    'skateboard',
    'tattoo',
    'tofu',
    'vegan',
    'vim', // lol
    'vinyl',
    'viral',
    "you probably haven't heard of them",
    'Austin',
    'Brooklyn',
    'DIY',
    'PBR',
    'Portland',
    'San Francisco',
    'Toms',
    'VHS',
    'wire-rimmed glasses'
  ];

  return {
    /**
     * Returns a HipsterIpsum string.
     * @param {int} para
     *   Number of paragraphs to generate.
     * @param {boolean} html
     *   Flag to include HTML tags or not.
     */
    get: function(para, html) {
      var ret = '';
      var wCount = 0;
      var hipDist = Math.round(Math.random() * (10 - 3) + 3);

      // Set some sane defaults.
      para = para || 4;
      html = html || false;

      // Create the correct number of paragraphs.
      for (var p = 0; p < para; p++) {
        if (html) {
          ret += '<p>';
        }

        // Create a random number of sentences.
        var numSen = Math.round(Math.random() * (10 - 4) + 4);
        for (var s = 0; s < numSen; s++) {
          // Create a random number of words for each sentence.
          var sLen = Math.round(Math.random() * (20 - 15) + 15);
          for (var w = 0; w < sLen; w++, wCount++) {
            var i = 0;
            var word = '';
            if (wCount % hipDist === 0) {
              i = Math.round(Math.random() * hipster.length);
              word = hipster[i];
            }
            else {
              i = Math.round(Math.random() * latin.length);
              word = latin[i];
            }

            // Capitalize the first word in the sentence.
            if (w === 0 && typeof word !== 'undefined') {
              word = word.charAt(0).toUpperCase() + word.slice(1);
            }

            ret += word;

            if (w + 1 < sLen) {
              ret += ' ';
            }
          }
          ret += '.';

          if (s + 1 < numSen) {
            ret += ' ';
          }
        }

        if (p + 1 < para) {
          if (html) {
            ret += "</p>\n";
          }
          else {
            ret += "\n\n";
          }
        }
      }

      return ret;
    }
  };
}());

if (typeof window !== 'undefined') {
  window.HipsterIpsum = HipsterIpsum;
}
else {
  module.exports = HipsterIpsum;
}

