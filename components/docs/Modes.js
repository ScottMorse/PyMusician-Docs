import DocContainer from './DocContainer'
import Python from './Python'

export default () => <DocContainer title="Modes">
  <section>
    <h2>Reference for This Section:</h2>
    <ul className="ref-links">
      <li><a href="#mode-class">The Mode Class</a></li>
      <li><a href="#properties">Mode Properties</a></li>
      <li><a href="#supported">Supported Modes</a></li>
      <li><a href="#custom">Custom Modes</a></li>
    </ul>
  </section>
  <section>
    <h2 id="mode-class">The Mode Class</h2>
    <p>To create a new Mode instance, all one needs is the root and mode name. The root note can either be a string note name, or a Note object.</p>
    <Python>
{`import pymusician as pm

cmaj = pm.Mode("C","major")

C = pm.Note("C")

cmaj = pm.Mode(C, "ionian")

amin = pm.Mode("A","minor")
`}
    </Python>
  </section>
  <section>
    <h2 id="properties">Mode Properties</h2>
    <h3>self.root</h3>
    <p>Returns the Note object for root of the mode. Even if a string was passed originally for the root note, the property will be a Note instance.</p>
    <h3>self.mode</h3>
    <p>Simply the mode name, like "major", "minor."</p>
    <h3>self.name</h3>
    <p>The mode's full name, combining the root and mode name ("A major")</p>
    <h3>self.spelling</h3>
    <p>This is the main purpose of the Mode class. <b>self.spelling </b>is a tuple of Note objects that spell the Mode. However, you can <b>iterate over a Mode instance itself</b> to iterate over its spelling for you, allowing you to treat the Mode itself like an iterator. Also, <b>indexing</b> the Mode instance will index the spelling, and the <b>len()</b> of the Mode object is the length of its spelling.</p>
    <Python>
{`import pymusician as pm

d_harm_min = pm.Mode("D","harmonic minor")

d_harm_min.spelling # List of Note objects: D E F G A Bb C#

#print every note name of the mode
for note in d_harm_min.spelling:
    print(note.name)

#equivalent to the previous lines of code
for note in d_harm_min:
    print(note.name)

d_harm_min[6] # Note("C#")

len(d_harm_min) # 7
`}
    </Python>
  </section>
  <section>
    <h2 id="supported">Supported Mode Names</h2>
    <p>Use any mode name listed here as a string when creating a Mode.</p>
    <h2>Diatonic/common</h2>
    <ul className="center-list">
      <li>major, ionian</li>
      <li>minor, aeloian</li>
      <li>harmonic minor</li>
      <li>melodic minor</li>
      <li>dorian</li>
      <li>phrygian</li>
      <li>lydian</li>
      <li>mixolydian</li>
      <li>locrian</li>
    </ul>
    <h2>Pentatonic/blues</h2>
    <ul className="center-list">
      <li>major pentatonic</li>
      <li>minor pentatonic</li>
      <li>blues, minor blues</li>
      <li>major blues</li>
    </ul>
    <h2>Modes of melodic minor</h2>
    <ul className="center-list">
      <li>dorian flat 2</li>
      <li>lydian sharp 5</li>
      <li>lydian dominant</li>
      <li>mixolydian flat 6</li>
      <li>locrian sharp 2</li>
      <li>altered, super locrian</li>
    </ul>
    <h2>Symmetrical</h2>
    <ul className="center-list">
      <li>chromatic</li>
      <li>whole tone</li>
      <li>whole-half diminished, whole-half octatonic</li>
      <li>half-whole diminished, half-whole octatonic</li>
      <li>augmented</li>
    </ul>
  </section>
  <section>
    <h2 id="custom">Custom Modes</h2>
    <p>As of the moment, there is not support for custom modes within the Python, but the package's modes are found in a file called modes.json in the package's folder /pymusician/data/modes.json.</p>
    <p>For now, if you want to add or edit your modes, open this json, and add your mode's name as a key to thes first object with an array of the steps of the mode as its value. Make sure to include the step that returns to the root at the end. Like this:</p>
    <Python>
{`[
    {
        "ionian": [2,2,1,2,2,2,1],
        "major": "ionian1",
        "YOUR CUSTOM MODE": [2,1,2,1,2,2,2],
`}
    </Python>
    <p>To clarify what is happening in this file, the modes with array values set the steps of a main mode (such as 2 for whole step, 1 for half step, 3 for minor 3rd/augmented 2nd). The modes with string values refer to a parent mode and the scale degree from which the step pattern starts.</p>
    <p>The Mode class will attempt to spell your mode in the best way that it can, but if your mode has an irregular step pattern that requires specific letter spellings, optionally add your mode to the second object of modes.json as well, with a "letter spelling" array, which corresponds to how many alphabetical letters each step should change. For example, diatonic modes have letter spellings of [1,1,1,1,1,1,1,1], because letters always run strictly alphabetically in diatonic modes.</p>
    <Python>
{`[
    {
        "ionian": [1,1,1,1,1,1,1],
        "major": "ionian1",
        "YOUR CUSTOM MODE'S SPELLING": [1,1,1,1,2,1,1],
`}
    </Python>
    <p>As of now, many common modes are supported, and most users will most likely use mainly diatonic, harmonic/melodic minor, and pentatonic/blues modes, which are all fully supported. Read the reference above for the names to use for them. More support for custom modes will be sure to come with PyMusician.</p>
  </section>
</DocContainer>