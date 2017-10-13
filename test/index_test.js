const test = require('assert');
const sut = require('../build/cal-hebrew');

describe('CAL', () => {
  describe('To Hebrew', () => {
    it('General case usage, with one-to-one mapping', () => {
      const word = sut.toHebrew('dqsry)-dpylypws');
      const wordExpected = 'דקסריא-דפיליפוס';
      const vocalised = sut.toHebrew("d'qesariya)-d,p,yilyip'wOs");
      const vocalisedExpected = 'דּקֵסַרִיַא-דפיִליִפּוֺס';
      test.strictEqual(word, wordExpected, 'sut.toHebrew_generic consonant');
      test.strictEqual(
        vocalised,
        vocalisedExpected,
        'sut.toHebrew_generic vocalised'
      );
    });
    it('Word with (yi) => (i;) mapping', () => {
      const word = sut.toHebrew('dylydwth');
      const wordExpected = 'דילידותה';
      const vocalised = sut.toHebrew("d'yilyid,wut,ehE");
      const vocalisedExpected = 'דּיִליִדוּתֵהֶ';
      test.strictEqual(word, wordExpected, 'sut.toHebrew_yi consonant');
      test.strictEqual(
        vocalised,
        vocalisedExpected,
        'sut.toHebrew_yi vocalised'
      );
    });
    it('Word with short Eastern (E) => (e) mapping', () => {
      const word = sut.toHebrew(')wld');
      const wordExpected = 'אולד';
      const vocalised = sut.toHebrew(')awlEd');
      const vocalisedExpected = 'אַולֶד';
      test.strictEqual(word, wordExpected, 'sut.toHebrew_yi consonant');
      test.strictEqual(
        vocalised,
        vocalisedExpected,
        'sut.toHebrew_yi vocalised'
      );
    });
    it('Word with (wu) => (uO) mapping', () => {
      const word = sut.toHebrew('lb(ldbbykwn');
      const wordExpected = 'לבעלדבביכון';
      const vocalised = sut.toHebrew("lab,(eld'b,ob,ayk'wun");
      const vocalisedExpected = 'לַבעֵלדּבָבַיכּוּן';
      test.strictEqual(word, wordExpected, 'sut.toHebrew_wu consonant');
      test.strictEqual(
        vocalised,
        vocalisedExpected,
        'sut.toHebrew_wu vocalised'
      );
    });
    it('Word with (wO) => (oO) mapping', () => {
      const word = sut.toHebrew(')bhwhy');
      const vocalised = sut.toHebrew(')ab,ohawh_y');
      const wordExpected = 'אבהוהי';
      const vocalisedExpected = 'אַבָהַוהי';
      test.strictEqual(word, wordExpected, 'sut.toHebrew_wO consonant');
      test.strictEqual(
        vocalised,
        vocalisedExpected,
        'sut.toHebrew_wO vocalised'
      );
    });
    it('Word with Palestinian P', () => {
      const word = sut.toHebrew(')Pbhwhy');
      const vocalised = sut.toHebrew(')aPeb,ohawh_y');
      const wordExpected = 'אפבהוהי';
      const vocalisedExpected = 'אַפֵבָהַוהי';
      test.strictEqual(word, wordExpected, 'sut.toHebrew_wO consonant');
      test.strictEqual(
        vocalised,
        vocalisedExpected,
        'sut.toHebrew vocalised with P'
      );
    });
    it('Word with Hebrew Sin', () => {
      const word = sut.toHebrew(')Pbhwh&');
      const wordExpected = 'אפבהוהשׂ';
      const vocalised = sut.toHebrew(')aPeb,ohawh_&o');
      const vocalisedExpected = 'אַפֵבָהַוהשָׂ';
      test.strictEqual(word, wordExpected, 'sut.toHebrew consonant with Sin');
      test.strictEqual(
        vocalised,
        vocalisedExpected,
        'sut.toHebrew vocalised with Sin'
      );
    });
    it('Word with Hebrew Shin', () => {
      const word = sut.toHebrew(')d$)');
      const wordExpected = 'אדשׁא';
      const vocalised = sut.toHebrew(')od,$o)');
      const vocalisedExpected = 'אָדשָׁא';
      test.strictEqual(word, wordExpected, 'sut.toHebrew consonant with Shin');
      test.strictEqual(
        vocalised,
        vocalisedExpected,
        'sut.toHebrew vocalised with Shin'
      );
    });
    it('Invalid Rukkakha', () => {
      const word = sut.toHebrew(')Pbh,swh&');
      const wordExpected = 'אפבהסוהשׂ';
      test.strictEqual(word, wordExpected, 'sut.toHebrew invalid rukkakha');
    });
    it('Standalone Ou', () => {
      const word = sut.toHebrew(')PbOh,suwh&');
      const wordExpected = 'אפבֹהסֻוהשׂ';
      test.strictEqual(word, wordExpected, 'sut.toHebrew invalid rukkakha');
    });
    it('Blank word returns blank', () => {
      const word = sut.toHebrew('');
      const wordExpected = '';
      test.strictEqual(word, wordExpected, 'sut.toHebrew_blank');
    });
    it('Null word returns null', () => {
      const word = sut.toHebrew(null);
      const wordExpected = null;
      test.strictEqual(word, wordExpected, 'sut.toHebrew_null');
    });
    it('Undefined word returns undefined', () => {
      const word = sut.toHebrew(undefined);
      const wordExpected = undefined;
      test.strictEqual(word, wordExpected, 'sut.toHebrew_undefined');
    });
    it('0 number as word returns 0', () => {
      const word = sut.toHebrew(0);
      const wordExpected = 0;
      test.strictEqual(word, wordExpected, 'sut.toHebrew_zero');
    });
  });
  describe('Mapped writing', () => {
    it('Consonants length', () => {
      test.strictEqual(
        sut.mapper.fromWriting.consonants.length,
        sut.mapper.toWriting.consonants.length,
        'Length differs'
      );
      test.ok(
        sut.mapper.fromWriting.consonants.length > 22,
        'Length greater than 22'
      );
    });
    it('Vowels length', () => {
      test.strictEqual(
        sut.mapper.fromWriting.vowels.length,
        sut.mapper.toWriting.vowels.length,
        'Length differs'
      );
      test.ok(
        sut.mapper.fromWriting.vowels.length > 5,
        'Length greater than 5'
      );
    });
    it('Diacritics undefined', () => {
      test.strictEqual(
        sut.mapper.fromWriting.diacritics,
        undefined,
        'from undefined'
      );
      test.strictEqual(
        sut.mapper.fromWriting.diacritics,
        sut.mapper.toWriting.diacritics,
        'to undefined'
      );
    });
  });
});

describe('CAL', () => {
  describe('To Hebrew', () => {
    it('Blank word returns blank', () => {
      const word = sut.toHebrew('');
      const wordExpected = '';
      test.strictEqual(word, wordExpected, 'sut.toHebrew_blank');
    });
    it('Null word returns null', () => {
      const word = sut.toHebrew(null);
      const wordExpected = null;
      test.strictEqual(word, wordExpected, 'sut.toHebrew_null');
    });
    it('Undefined word returns undefined', () => {
      const word = sut.toHebrew(undefined);
      const wordExpected = undefined;
      test.strictEqual(word, wordExpected, 'sut.toHebrew_undefined');
    });
    it('0 number as word returns 0', () => {
      const word = sut.toHebrew(0);
      const wordExpected = 0;
      test.strictEqual(word, wordExpected, 'sut.toHebrew_zero');
    });
  });
  describe('Mapped writing', () => {
    it('Consonants length', () => {
      test.strictEqual(
        sut.mapper.fromWriting.consonants.length,
        sut.mapper.toWriting.consonants.length,
        'Length differs'
      );
      test.ok(
        sut.mapper.fromWriting.consonants.length > 22,
        'Length greater than 22'
      );
    });
    it('Vowels length', () => {
      test.strictEqual(
        sut.mapper.fromWriting.vowels.length,
        sut.mapper.toWriting.vowels.length,
        'Length differs'
      );
      test.ok(
        sut.mapper.fromWriting.vowels.length > 5,
        'Length greater than 5'
      );
    });
  });
});
