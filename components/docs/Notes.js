import DocContainer from './DocContainer'
import Python from './Python'

export default () => <DocContainer title="Notes">
  <section>
    <h2>Reference for This Section:</h2>
    <ul className="ref-links">
      <li><a href="#a4">A4</a></li>
      <li><a href="#note-class">Note class</a></li>
      <li><a href="#pitch-letter">Pitch/letter values</a></li>
      <li><a href="#octave">Octave</a></li>
      <li><a href="#hard-pitch">Hard Pitch</a></li>
      <li><a href="#rhythm">Rhythm</a></li>
      <li><a href="#pitch-offset">Pitch Offset</a></li>
      <li><a href="#frequency">Frequency</a></li>
      <li><a href="#enharmonic">Enharmonic</a></li>
      <li><a href="#static">Static methods</a></li>
    </ul>
  </section>
  <section>
    <h2 id="a4">A4</h2>
    <p>The value of A4 by default is <b>440 Hz</b>, which is currently a common standard. This value can be changed in the code for PyMusician, and it is the only value that will globally affect the code. The method for setting it is protected, however. The following example shows how to set A4 to a new number. If anything other than a valid positive number (int or float) is given, an error will be raised.</p>
    <Python>
{`import pymusician as pm

print( pm.A4.getA4() ) # should print 440

note_A4 = pm.Note("A",4)

print(note_A4.frequency) # should print 440

pm.A4.setA4(442)

print(note_A4.frequency) # should print 442
`}
    </Python>
  </section>
  <section>
    <h2 id="note-class">The Note Class</h2>
    <p>An object from the Note class represents a pitched note (support for rests on the way). The only required argument is the note name.</p>
    <p>A note name should just be a string of the common name for the note, such as "A","A#", "Bb", etc.</p>
    <p>A generally unlimited number of sharps/flats is technically allowed with accurate effects to the object's pitch-related values, though notes like this is are not generally not encouraged in PyMusician (or music in general).</p>
    <p>Invalid note names will raise a ValueError.</p>
    <Python>
{`from pymusician import Note

A = Note("A")
Bb = Note("Bb")
Es = Note("E#")
Fbb = Note("Fbb") # technically possible
Gssss = Note("G####") # also technically possible...

Bb.name # Use the self.name property to access the string name
Gssss.name # 'G####'
`}
    </Python>
  </section>
  <section>
    <h2 id="pitch-letter">Pitch and Letter Values</h2>
    <p>The two most basic properties of a Note are its 'pitch' and 'letter'. Both are integers, and both have nothing to do with specificity of octave (a separate property called "hard_pitch" deals with a value given on octave, read on).</p>
    <h2>Pitch Value:</h2>
    <p>The property self.pitch represents a relative value for a Note's pitch. This starts at 0 for C natural. C#/Db then has the pitch 1, and D has 2 (Ebb or C## would also have this pitch). The range of pitch values is 0 to 11 (11 equivalent to B). This is <i>not</i> octave-sensitive.</p>
    <Python>
{`import pymusician as pm

pm.Note("C").pitch # 0

pm.Note("C#").pitch # 1

pm.Note("Db").pitch # 1

pm.Note("D").pitch # 2

pm.Note("Dbb").pitch # 0
`}
    </Python>
    <h2>Letter Value:</h2>
    <p>The property self.letter assigns an integer value for a Note's alphabetical letter, which similarly starts at 0 for C natural. Any Note using the same initial letter has the same letter value (C#,C##,Cb,Cbb all have 0). The range of letter values is 0 to 6 (6 for the letter B).</p>
    <Python>
{`import pymusician as pm

C = pm.Note("C")
Cs = pm.Note("C#")
Db = pm.Note("Db")
D = pm.Note("D")

C.pitch # 0
C.letter # 0 
Cs.pitch # 1 
Cs.letter # 0
Db.pitch # 1
Db.letter # 1
D.pitch # 2
D.letter # 1
`}
    </Python>
    <h2>Common Pitch/Letter Reference:</h2>
    <table>
      <tbody>
        <tr>
          <th>Note</th><th>Pitch</th><th>Letter</th>
        </tr>
        <tr>
          <th>C</th><th>0</th><th>0</th>
        </tr>
        <tr>
          <th>C#</th><th>1</th><th>0</th>
        </tr>
        <tr>
          <th>Db</th><th>1</th><th>1</th>
        </tr>
        <tr>
          <th>D</th><th>2</th><th>1</th>
        </tr>
        <tr>
          <th>D#</th><th>3</th><th>1</th>
        </tr>
        <tr>
          <th>Eb</th><th>3</th><th>2</th>
        </tr>
        <tr>
          <th>E</th><th>4</th><th>2</th>
        </tr>
        <tr>
          <th>F</th><th>5</th><th>3</th>
        </tr>
        <tr>
          <th>F#</th><th>6</th><th>3</th>
        </tr>
        <tr>
          <th>Gb</th><th>6</th><th>4</th>
        </tr>
        <tr>
          <th>G</th><th>7</th><th>4</th>
        </tr>
        <tr>
          <th>G#</th><th>8</th><th>4</th>
        </tr>
        <tr>
          <th>Ab</th><th>8</th><th>5</th>
        </tr>
        <tr>
          <th>A</th><th>9</th><th>5</th>
        </tr>
        <tr>
          <th>A#</th><th>10</th><th>5</th>
        </tr>
        <tr>
          <th>Bb</th><th>10</th><th>6</th>
        </tr>
        <tr>
          <th>B</th><th>11</th><th>6</th>
        </tr>
      </tbody>
    </table>
  </section>
  <section>
    <h2 id="octave">Octave</h2>
    <p>The second argument for a Note object is optional and denotes its octave value, which should be set to an integer. Octave numbering is the same as common practice (Scientific Pitch Notation), 4 representing the middle octave, and octaves change at the note C natural.</p>
    <p>It is possible to set the octave value after instantiating a Note.</p>
    <p>Access the integer with self.octave. If none is set, returns None.</p>
    <Python>
{`import pymusician as pm

C4 = pm.Note("C",4)

A = pm.Note("A")
A.octave  # None

A.octave = 4
A.octave # 4

Gb0 = pm.Note("Gb",0)

Bn1 = pm.Note("B",-1)
`}
    </Python>
  </section>
  <section>
    <h2 id="hard-pitch">Hard Pitch</h2>
    <p>If a Note object's octave value has been set, then the object has a property at self.hard_pitch that represents a concrete pitch value for the note represented by an integer. C0 is used as the basis, having a hard_pitch of 0, and hard_pitch values rise or fall by the half step from there.</p>
    <p>If no octave has been set, returns None.</p>
    <Python>
{`import pymusician as pm

C0 = pm.Note("C",0)
C0.hard_pitch # 0

C4 = pm.Note("C",4)
C4.hard_pitch # 48

B3 = pm.Note("B",3)
B3.hard_pitch # 47

Db4 = pm.Note("Db",4)
Db4.hard_pitch # 49

A4 = pm.Note("A", 4)
A4.hard_pitch # 57

F = pm.Note("F")
F.hard_pitch # None
`}
    </Python>
  </section>
  <section>
    <h2 id="rhythm">Rhythm</h2>
    <p>The rhythm parameter is the third parameter (optional) for a Note. This may be the first more alien-looking nomenclature, but with practice in using pymusician, it will make sense. Finale users may find the system of numbering rhythm qualities familiar.</p>
    <p>The rhythm is set by a string of flags. The first flag determines the kind of rhythm. The longest base rhythm is a double whole note, represented by the character "0"(zero), and the shortest is a 512th note, represented by "10". Here is a list of base rhythms with their respective flags:</p>
    <table>
      <tbody>
        <tr>
          <th>Rhythm</th><th>Flag</th>
        </tr>
        <tr>
          <th>Double Whole</th><th>"0"</th>
        </tr>
        <tr>
          <th>Whole</th><th>"1"</th>
        </tr>
        <tr>
          <th>Half</th><th>"2"</th>
        </tr>
        <tr>
          <th>Quarter</th><th>"3"</th>
        </tr>
        <tr>
          <th>8th</th><th>"4"</th>
        </tr>
        <tr>
          <th>16th</th><th>"5"</th>
        </tr>
        <tr>
          <th>32nd</th><th>"6"</th>
        </tr>
        <tr>
          <th>64th</th><th>"7"</th>
        </tr>
        <tr>
          <th>128th</th><th>"8"</th>
        </tr>
        <tr>
          <th>256th</th><th>"9"</th>
        </tr>
        <tr>
          <th>512th</th><th>"10"</th>
        </tr>
      </tbody>
    </table>
    <h2>Dotted Rhythms</h2>
    <p>The next possible flag is a dot. Add "." or even multiple "."'s after the first flag to make a rhythm dotted, or doubly dotted, or triply dotted, etc. This will make an effect on the value of the rhythm, covered later.</p>
    <h2>Triplets</h2>
    <p>Finally, a "t" can be added to make a note a common 3:2 triplet. This also actively effects the value of the rhythm's length.</p>
    <h2>Using with Note objects</h2>
    <p>The rhythm parameter is set in the third parameter when initializing an object, or later by assigning self.rhythm the correct flags.</p>
    <Python>
{`import pymusician as pm

#Middle C as a quarter note
#rhythm flags as the third op. parameter
C4q = pm.Note("C",4,"3")

#Middle C as a dotted half note
C3h = pm.Note("C",4,"2.")

#Ab as an eighth note (no octave)
Ab4e = pm.Note("Ab",None,"4")

#F#2 as a sextuplet
Fs2sxt = pm.Note("F#",2,"5t")

#E as a doubly dotted half note
E = pm.Note("E")
E.rhythm = "2.."
`}
    </Python>
    <h2>The Rhythm Object</h2>
    <p>Once the rhythm flags are set, self.rhythm returns an object acting as a sub-object of the Note. It has these properties:</p>
    <ul>
      <li><b>self.rhythm.value:</b> The length of the rhythm measured in <b>512th</b> notes</li>
      <li><b>self.rhythm.flags:</b> The original flags string</li>
      <li><b>self.rhythm.num:</b> The number from the flags</li>
      <li><b>self.rhythm.dots:</b> The number of dots in the rhythm</li>
      <li><b>self.rhythm.triplet:</b> True/False if rhythm is a triplet</li>
    </ul>
    <Python>
{`import pymusician as pm

C = pm.Note("C")
C.rhythm = "3"
# a quarter note

C.rhythm.value # 128

C.rhythm = "3t"
C.rhythm.value # 85.3333... for the length of a quarter triplet
C.rhythm.triplet # True
C.rhythm.dots # 0

C.rhythm = "3."
C.rhythm.value # 192.0 for the length of a dotted quarter
C.rhythm.dots # 1
C.rhythm.triplet # False
`}
    </Python>
  </section>
  <section>
    <h2 id="pitch-offset">Pitch Offset</h2>
    <p>The property at self.pitch_offset is a simple integer representing how offset the relative pitch of the note is from its natural sibling. For example, any natural notes have a pitch offset of 0, sharp notes have a pitch offset of 1, and flat notes have a pitch offset of -1. A double sharp note has an offset of 2, and likewise a double flat has an offset of -2.</p>
    <Python>
{`import pymusician as pm

A = pm.Note("A")
A.pitch_offset # 0

G = pm.Note("G")
G.pitch_offset # 0

As = pm.Note("A#")
As.pitch_offset # 1

Ab = pm.Note("Ab")
Ab.pitch_offset # -1

Gs = pm.Note("G#")
Gs.pitch_offset # 1

Gb = pm.Note("Gb")
Gb.pitch_offset # -1

Bss = pm.Note("B##")
Bss.pitch_offset # 2

Ebb = pm.Note("Ebb")
Ebb.pitch_offset # -2
`}
    </Python>
  </section>
  <section>
    <h2 id="frequency">Frequency</h2>
    <p>This property returns a float of the standard frequency for a note in Hz. This will return None if there is no octave set for an object, because there is no specific pitch for a note without it. If <a href="#a4">A4</a> is reassigned a new number, the basis for every frequency will be affected.</p>
    <Python>
{`import pymusician as pm

note_A4 = pm.Note("A",4)

note_A4.frequency # 440.0

note_A5 = pm.Note("A",5)

note_A5.frequency # 880.0

pm.A4.setA4(442) # reassign A4

note_A4.frequency # 442.0

note_A5.frequency # 884.0
`}
    </Python>
  </section>
  <section>
    <h2 id="enharmonic">Enharmonic Method</h2>
    <p>A musician familiar with the term 'enharmonic' will recognize the usefulness of having this method and will hopefully be glad that it is written here.</p>
    <p>When this method is called on a Note object, it returns a new Note object that is the equivalent enharmonic to the original note. This returns a new object without affecting the original object in place.</p>
    <p>By default, this will always convert a single sharp-note into a single-flat note, or any multi-sharp or multi-flat note into either a natural note or a single-sharp or single-flat note.</p>
    <p>The method has two optional parameters to help customize the way this can be used, which can be useful if iterating it on several notes with certain needs.</p>
    <h2>Parameter: Prefer ("#" or "b")</h2>
    <p>The first parameter for <b>self.enharmonic</b> is called 'prefer'. By default, it is set to None, but if using, it should be set to "#" or "b". Setting either of these will force the method to only return sharp or flat notes.</p>
    <p>This means that A# with a prefer of "#" will not convert to Bb but remain in place, and likewise, Bb will not convert to A# if prefer is set to "b".</p>
    <p>Abbb with a prefer of "b" will have a guaranteed conversion to Gb, and with a prefer of "#" will conver to F#.</p>
    <p>This finds use in situations of multi-sharp/flat notes or manual transposition, when all notes should fit a certain pattern to match a mode.</p>
    <h2>Parameter: Gross (bool)</h2>
    <p>The second optional parameter is called 'gross', because it deals with unpopular notes that are, however, often needed. By default, this parameter is set to False, but can be set to True.</p>
    <p>If True, this means that the notes B#, Cb, E#, and Fb as fair game as any other natural or single-sharp/flat note. C will conver to B#, B will convert to Cb, E will convert to Fb, and F will convert to E#. This may find its most common use when dealing with keys such as F#/Gb major.</p>
    <Python>
{`import pymusician as pm

Ds = pm.Note("D#")
Eb = Ds.enharmonic() # successfully assigns Note("Eb") to variable Eb

Bbbb = pm.Note("Bbbb")
Ab = Bbbb.enharmonic("b") # prefer set to 'b' guarantees Ab to return
Gs = Bbbb.enharmonic("#") # prefer set to '#' guarantees G# to return

F = pm.Note("F")
F.enharmonic() # returns the same F natural
Es = F.enharmonic(None,True) # no preference of #/b, but allows gross
# ^ This now returns E# instead of F natural.

#A stranger situation to see the workings of this method:
Ass = pm.Note("A##")
B = Ass.enharmonic() # reduces A double sharp to B natural
Cb = Ass.enharmonic().enharmonic(None,True) #returns B, then Cb
B = Ass.enharmonic().enharmonic("#",True) #returns B instead of Cb, preference of '#' negating the possibility of a flat
`}
    </Python>
  </section>
  <section>
    <h2 id="static">Static Methods</h2>
    <p>The main purpose of the Note class's static methods is to allow the possibility to create instances of Note objects in different dynamic ways.</p>
    <h3>Note.from_values(letter,pitch,octave=None,rhythm=None)</h3>
    <p>This method allows for the creation of a Note object from the letter and pitch values (both integers) that are normally assigned a note object in normal construction.</p>
    <p>Keep in mind that this method only returns a simple object with no octave or rhythm, though these values can be set to an object after its creation.</p>
    <p>Optional octave and rhythm arguments can be supplied.</p>
    <Python>
{`import pymusician as pm

C = pm.Note.from_values(0,0) # C natural
Cs = pm.Note.from_values(0,1) # C sharp
B = pm.Note.from_values(6,11) # B natural
Bb = pm.Note.from_values(6,10) # B flat
As = pm.Note.from_values(5,10) # A sharp
A = pm.Note.from_values(5,9,4,"3t") # A natural, octave 4, quarter triplet
`}
    </Python>
    <h3>Note.from_hard_pitch(hard_pitch,prefer=None,rhythm=None)</h3>
    <p>Read earlier about <a href="#hard-pitch">hard pitch</a> to understand the value required for this method's first argument. It should be an integer representing the same hard_pitch that an octave-valued note is assigned.</p>
    <p>The optional 'prefer' parameter works similarly to the 'prefer' parameter in the <a href="#enharmonic">enharmonic</a> method. By default, this method returns sharp notes instead of flat, unless prefer is set to "b".</p>
    <Python>
{`import pymusician as pm

A4 = pm.Note.from_hard_pitch(57) # A octave 4
C4 = pm.Note.from_hard_pitch(48) # C octave 4
C0 = pm.Note.from_hard_pitch(0) # C octave 0
Cs0 = pm.Note.from_hard_pitch(1) # C sharp (sharp by default)
Db0 = pm.Note.from_hard_pitch(1,'b') #prefer set to 'b' returns Db instead of C sharp
`}
    </Python>
    <h3>Note.from_frequency(frequency,prefer=None,rhythm=None)</h3>
    <p>This is a very similar method to Note.from_hard_pitch, except taking a Hz value for the note. The global constant A4 also will affect this method in the same way it affects any other frequency-related data.</p>
    <p>Since frequency values are usually not whole numbers, this method will round the given Hz to the closest accurate note frequency. This may prove useful if this code is used alongside audio analysis.</p>
    <p>Like Note.from_hard_pitch, it returns sharp notes by default, but the second optional parameter can be set to 'b' for flat notes.</p>
    <Python>
{`import pymusician as pm

A4 = pm.Note.from_frequency(440) # A octave 4
Gs4 = pm.Note.from_frequency(415) # G sharp octave 3, frequency is close enough
Ab4 = pm.Note.from_frequency(415,'b') # Ab octave 3, frequency is close enough
A3 = pm.Note.from_frequency(220) # A octave 3
`}
    </Python>
  </section>
</DocContainer>