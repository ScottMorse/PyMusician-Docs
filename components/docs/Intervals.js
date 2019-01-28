import DocContainer from './DocContainer'
import Python from './Python'

export default () => <DocContainer title="Intervals">
  <section>
    <h2>Reference for This Section</h2>
    <ul className="ref-links">
      <li><a href="#interval-class">Interval Class</a></li>
      <li><a href="#add-sub">Adding/subtracting with Notes</a></li>
      <li><a href="#properties">Interval properties</a></li>
      <li><a href="#static">Static methods</a></li>
    </ul>
  </section>
  <section>
    <h2 id="interval-class">The Interval Class</h2>
    <p>Instances from the Interval class represent a pure interval value representing a distance between notes based on common practice nomenclature.</p>
    <h2>Creating a basic Interval</h2>
    <p>The Interval constructor takes two arguments, the first being a string of flags to represent the basic interval, and the second being an optional value to displace an interval by a number of octaves (integer).</p>
    <p>The flags are meant to be intuitive to those familiar with common interval names. The flags should be a single string with two characters, the first representing the interval quality, and the second representing the interval size.</p>
    <p>The quality flag should be 'M' for major, 'm' for minor, 'P' for perfect, 'A' for augmented, and 'D' for diminished. (Lowercase forgiven for 'P','A', or 'D').</p>
    <p>The second flag should be the interval size, '1' for unison, '2' for second, etc. up to 7th. Using '8' will work for a single octave, but in general, use the 'displace' parameter for intervals greater than an octave (read on).</p>
    <p>This will look like 'm2' for a Minor 2nd, 'M3' for a Major 3rd, 'P4' (or 'p4' is forgiven) for Perfect 4th, 'A4' for Augmented Fourth, 'D5' (or 'd5') for Diminished 5th, etc.</p>
    <p>Invalid names of intervals will raise ValueError's. This would include perfect 3rds, major 4ths, etc. Any interval can be augmented or diminished, so no errors will be raised for these.</p>
    <Python>
{`import pymusician as pm

half_step = pm.Interval('m2')

whole_step = pm.Interval('M2')

minor_third = pm.Interval('m3')

major_third = pm.Interval('M3')

aug_third = pm.Interval('A3') # successfully returns enharmonic equivalent to perfect 4th

per_fourth = pm.Interval('P4')
`}
    </Python>
    <p>In the rare case that an interval needs to be doubly/triply (or more) augmented or diminished, add '.' ' s after the 'A' or 'D' flag.</p>
    <Python>
{`import pymusician as pm

doubly_augmented_fourth = pm.Interval('A.4')
triply_diminished_fifth = pm.Interval('D..5')
`}
    </Python>
    <h2>Displace</h2>
    <p>Here are examples that use the 'displace' optional parameter (default 0) to increase the number of octaves added to the interval.</p>
    <Python>
{`import pymusician as pm

perfect_octave1 = pm.Interval('P8')
perfect_octave2 = pm.Interval('P1',1) #this represents the same interval as the previous

minor_9th = pm.Interval('m2',1)

major_13th = pm.Interval('M6',1)

dim7_and_two_octaves = pm.Interval('D7',2)
`}
    </Python>
  </section>
  <section>
    <h2 id="add-sub">Adding/Subtracting Intervals with Note objects</h2>
    <p>You can add or subtract an Interval to a Note (must be Note object + Interval object, Note coming first). This returns a Note intance either above or below the previous at that interval.</p>
    <Python>
{`import pymusician as pm

C4 = pm.Note("C",4)

maj_2nd = pm.Interval("M2")

maj_14th = pm.Interval("M7",1)

octave = pm.Interval("P8")

new_note_D4 = C4 + maj_2nd #creates pm.Note("D",4)

new_note_D5 = new_note_D4 + octave #creates pm.Note("D",5)

new_note_C3 = C4 - octave #creates pm.Note("C",3)

new_note_B5 = C4 + maj_14th #creates pm.Note("B",5)
`}
    </Python>
  </section>
  <section>
    <h2 id="properties">Interval Properties</h2>
    <h3>self.diff</h3>
    <p>The diff property returns an integer representing how many half steps long the distance of the interval is. It would be 0 for perfect unison ('p1'), 1 for minor 2nd, etc.</p>
    <h3>self.letter_diff</h3>
    <p>The letter_diff property returns an integer representing how many letters change by an interval. For example, all 2nds step in alphabetic letter by 1, regardless of quality, all 3rds change letter by 2, and so on.</p>
    <h3>self.name</h3>
    <p>This returns a more visually appealing name for the interval. This would be a string such as "Major 2nd" for an 'M2' interval, "Major 13th" for a major 6th displaced by one octave, and "Perfect 4th plus 2 octaves" for a perfect fourth displaced by two octaves. This is mainly for convenience, though the __repr__ for Interval objects is also clear if one is familiar with the flags used in the initializer.</p>
  </section>
  <section>
    <h2 id="static">Static methods</h2>
    <h3>Interval.from_notes(note_obj1,note_obj2)</h3>
    <p>This is a way to receive an Interval object from the distance between two Note objects. If both Note objects have octave values, it will return an interval specific to their octave and pitch distance. If one or neither have octave values, it will treat the first note as ascending to the second.</p>
    <Python>
{`import pymusician as pm

C4 = pm.Note("C",4)
A4 = pm.Note("A",4)

maj_6th = pm.Interval.from_notes(C4,A4) # returns Interval('M6')

C2 = pm.Note("C",2)

two_octaves = pm.Interval.from_notes(C2,C4) # returns Interval('P1',2)

Bb = pm.Note("Bb")
F = pm.Note("F")

per_5th = pm.Interval.from_notes(Bb,F) # returns Interval('P5')

per_4th = pm.Interval.from_notes(F,Bb) # returns Interval('P4')
`}
    </Python>
  </section>
</DocContainer>