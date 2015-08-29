/*
 * hipsteripsum
 * https://github.com/elliotttf/hipsteripsum
 *
 * Copyright (c) 2012 Elliott Foster
 * Licensed under the MIT license.
 */

'use strict';

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
    "90's",
    'actually',
    'aesthetic',
    'american apparel',
    'street art',
    'artisan',
    'asymmetrical',
    'Austin',
    'authentic',
    'axe',
    'bahn mi',
    'banjo',
    'banksy',
    'beard',
    'before they sold out',
    'bespoke',
    'bicycle',
    'biodiesel',
    'bitters',
    'blog',
    'Blue Bottle',
    'Brooklyn',
    'brunch',
    'butcher',
    'cardigan',
    'carles',
    'chia',
    'chic',
    'chillwave',
    'church-key',
    'cleanse',
    'cold-pressed',
    'craft beer',
    'cray',
    'cred',
    'cronut',
    'deep v',
    'denim',
    'direct trade',
    'disrupt',
    'distillery',
    'DIY',
    'dreamcatcher',
    'Echo Park',
    'ennui',
    'ethical',
    'Etsy',
    'fanny pack',
    'farm-to-table',
    'fashion',
    'fixie',
    'flannel',
    'flexitarian',
    'food truck',
    'foodie',
    'forage',
    'freegan',
    'gastropub',
    'gentrify',
    'gluten-free',
    'godard williamsburg',
    'hashtag',
    'HEALTH',
    'heirloom',
    'Helvetica',
    'hoodie',
    'indie',
    'intelligentsia',
    'iphone',
    'irony',
    'kale chips',
    'keffiyeh',
    'keytar',
    'kickstarter',
    'kitsch',
    'kogi',
    'laserdisc',
    'leggings',
    'letterpress',
    'life',
    'literally',
    'lo-fi',
    'locavore',
    'lol',
    'lomo',
    'marfa',
    'master',
    'meditation',
    'meggings',
    'meh',
    'migas',
    'mixtape',
    'mlkshk',
    'moon',
    'mumblecore',
    'mustache',
    'narwhal',
    'neutra',
    'next level',
    'noise-rock',
    'normcore',
    'occupy',
    'Odd Future',
    'organic',
    'PBR',
    'PBR&B',
    'photo booth',
    'pickled',
    'Pinterest',
    'Pitchfork',
    'plaid',
    'polaroid',
    'pop-up',
    'pork belly',
    'Portland',
    'post-ironic',
    'pour-over',
    'pug',
    'put a bird on it',
    'quinoa',
    'raw denim',
    'retro',
    'roof party',
    'salvia',
    'San Francisco',
    'scenester',
    'schlitz',
    'seitan',
    'selfies',
    'selvage',
    'semiotics',
    'shabby',
    'shoreditch',
    'shorts',
    'skateboard',
    'slow-carb',
    'specs',
    'stumptown',
    'sustainable',
    'swag',
    'tattoo',
    'tattooed',
    'taxidermy',
    'Thundercats',
    'tilde',
    'tofu',
    'Toms',
    'tote bag',
    'tousled',
    'trust fund',
    'truffaut',
    'try-hard',
    'tumblr',
    'twee',
    'typewriter',
    'umami',
    'vegan',
    'VHS',
    'Vice',
    'vim', // lol
    'vinegar',
    'vinyl',
    'viral',
    'wayfarers',
    'Wes Anderson',
    'wire-rimmed glasses',
    'wolf',
    'xoxo',
    'yolo',
    "you probably haven't heard of them",
    'yr'
  ];

  return {
    /**
     * Returns a HipsterIpsum string.
     * @param {int} para
     *   Number of paragraphs to generate.
     * @param {boolean} html
     *   Flag to include HTML tags or not.
     * @param {boolean} excludeLatin
     *   Flag to exclude latin text.
     */
    get: function(para, html, excludeLatin) {
      var ret = '';
      var wCount = 0;
      var hipDist = Math.round(Math.random() * (10 - 3) + 3);

      // Set some sane defaults.
      para = para || 4;
      html = html || false;
      excludeLatin = !!excludeLatin;

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

            if (excludeLatin || wCount % hipDist === 0) {
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
    },

    /**
     * Returns a HipsterIpsum string.
     * @param {int} num
     *   The number of words to return.
     */
    getWords: function (num) {
      var ret = [];
      var i, w, word;

      for (i = 0; i < num; i++) {
        w = Math.round(Math.random() * hipster.length);
        word = hipster[w];
        ret.push(word);
      }

      return ret.join(' ');
    }
  };
}());

if (typeof window !== 'undefined') {
  window.HipsterIpsum = HipsterIpsum;
}
else {
  module.exports = HipsterIpsum;
}

