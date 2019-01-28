import DocContainer from './DocContainer'
import Python from './Python'

export default () => <DocContainer title="Chords">
  <section>
    <h2>Reference for This Section:</h2>
    <ul className="ref-links">
      <li><a href="#chord-class">The Chord Class</a></li>
      <li><a href="#properties">Chord Properties</a></li>
      <li><a href="#thirteen">Note about 13 chords</a></li>
    </ul>
  </section>
  <section>
    <h2 id="chord-class">The Chord Class</h2>
    <p>The Chord class represents chords based on the common lead sheet symbol nomenclature.</p>
    <p>Chord naming and spelling has various differing opinions in practice and is sometimes debated. In PyMusician, a symbol reflecting what would be commonly seen in "lead music notation" is used to instantiate a Chord. PyMusician does the best job that it can to parse the symbol it is given and spell the chord in the most accurate sense that can be derived from the symbol.</p>
    <p>If you are familiar with lead sheet symbols, try simply passing it whatever chord symbol that you are comfortable with.</p>
    <p>Keep in mind that chords with very strange and uncommon symbols may not behave as expected, especially if it is a symbol that should never see the light of day on a professional sheet of music ("Abb5(no3)(#9)(add9)13(b5)sus"). On an unrelated note, does anyone know of a name that rhymes with "Gone Sevens?" (not the actor)</p>
    <p>This class is in the most infantile stage of all the classes here, and there is much more to come with different ways of creating and analyzing chords than from just lead sheet symbols.</p>
    <h2>Create A Chord</h2>
    <p>To create a Chord, simply pass it a string of a chord symbol. There are no set-in-stone rules, as PyMusician uses rigorous regular expressions to determine the chord. Don't sweat things like parentheses except in cases where it may confuse the root of the chord ("Ab5" and "A(b5)" will be different chords).</p>
    <Python>
{`import pymusician as pm

Amaj = pm.Chord("A") # A major triad
Gbmin7 = pm.Chord("Gbm7") # Gb minor 7
Csmin = pm.Chord("C#-") # C# minor triad
Fb13 = pm.Chord("Fb13") # Fb dominant 13
GmM7 = pm.Chord("Gm(maj7)") # G minor (major 7th)
Bsus = pm.Chord("Bsus4") # B suspended 4
Eb7b13s9 = pm.Chord("Eb7b13#9") # E dominant, flat 13, sharp 9
`}
    </Python>
    <p>Feel free to let me know of any chord spelling bugs that occur from the symbol parser, if you are sure that the spelling should be different. I have written hundreds of assertion tests to test the spellings of most commonly seen chord symbols, but there may still be some bugs in the cracks.</p>
    <p>Keep in mind that there are many chord symbol practices, and though several options are supported by PyMusician, you may just need to try a slightly different symbol.</p>
    <p>Support for slash chords (inversions) is coming soon!</p>
  </section>
  <section>
    <h2 id="properties">Chord Properties</h2>
    <h3>self.symbol</h3>
    <p>Refers to the original symbol string used when making the chord.</p>
    <h3>self.root</h3>
    <p>A Note object of the root of the chord.</p>
    <h3>self.quality</h3>
    <p>A triadic or base quality given to the chord as a string, such as "Major", "Minor", "Augmented", "Diminished", "5"(for 'power chords'), etc.</p>
    <h3>self.intervals</h3>
    <p>After the chord's root, quality, and extensions are parsed in initialization, self.intervals is a string of interval flags (such as used in the Interval class) separated by spaces, such as "M3 P5" for a major triad.</p>
    <h3>self.spelling</h3>
    <p>Just like the Mode property, it is a tuple which spells Note instances that make up the chord, including the root. Also, like in a Mode instance, <b>iterating over the Chord object itself</b> is the same as iterating over its spelling property.</p>
    <p>You can also <b>index</b> or get the <b>len()</b> of a Chord instance directly to get a specific note from the spelling or the length of the number of notes represented. Keep in mind that the index of the note you are searching for may not always be predicatable in chords with many extensions, though the root and triad will almost always be the first three indices [root,(third),(fifth)].</p>
    <Python>
{`import pymusician as pm

G13 = pm.Chord("G13")

for note in G13.spelling:
    print(note.name)

#same as above code
for note in G13:
    print(note.name)

G13[0] # Note("G")
G13[1] # Note("B")
G13[2] # Note("D")
G13[3] # Note("F")
G13[4] # Note("A")
G13[5] # Note("E")

len(G13) # 6
`}
    </Python>
  </section>
  <section>
    <h2 id="thirteen">A Note About 13 Chords</h2>
    <p>In the most strict definition, a 13 chord contains an entire heptatonic scale worth of notes in it, including some kind of 11th/4th. Some would argue that a dominant 13th chord should automatically then include a #11. I have ommitted this, since in practice I believe this is not used strictly enough to always be included, though I understand why it is often argued. In PyMusician, minor 13th chords do contain a natural 11, but any major quality 13 chords do not automatically include 11 or #11, so include it with a '#11' tag in the symbol ("G13#11").</p>
  </section>
</DocContainer>