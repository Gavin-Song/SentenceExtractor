# SentenceExtractor
A JS script to extract sentences from a piece of text (Advanced checking)

[![NPM](https://nodei.co/npm/sentence-extractor.png?downloads=true&stars=true)](https://nodei.co/npm/sentence-extractor/)

# Download 
```npm install sentence-extractor```

Add it in your code as follows

```var extract = require('sentence-extractor').extract;```

# Useage example
```javascript
extract("This is a javascript sentence extractor, it can accurately extract sentences. Isn't this cool? It even parses abbreviations like Dr. and St. correctly. U.S. Company in Washington D.C. in your text? No problem we'll extract it just as well. Even dates like 1.5.2017 work! As long as your sentence follows basic grammar rules and doesn't use any absurd abbreviations it should work fine. You can add your own abbreviations to extract.js if needed. Have fun!");

/*Result
[ 'This is a javascript sentence extractor, it can accurately extract sentences.',
  ' Isn\'t this cool?',
  ' It even parses abbreviations like Dr. and St. correctly.',
  ' U.S. Company in Washington D.C. in your text?',
  ' No problem we\'ll extract it just as well.',
  ' Even dates like 1.5.2017 work!',
  ' As long as your sentence follows basic grammar rules and doesn\'t use any absurd abbreviations it should work fine.',
  ' You can add your own abbreviations to extract.js if needed.',
  ' Have fun!' ]
*/

/*You can also use your own custom abbreviations (Such as dr. or mrs.) or sentence endings  
Example of using ) to end sentences and po. as an abbreviation*/
extract("Sentences end in ) Another sentence for po. test)", ["po"], [")"] );
 
/*[ 
    'Sentences end in )', 
    ' Another sentence for po. test)' 
]*/
```

# Authors
Program by Gavin Song

# License 
This program is licensed under the GNU General Public License v3.0. See [LICENSE](LICENSE) for more details.
