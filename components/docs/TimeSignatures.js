import DocContainer from './DocContainer'
import Python from './Python'

export default () => <DocContainer title="Time Signatures">
  <section>
    <h2>Reference for This Section:</h2>
    <ul className="ref-links">
      <li><a href="#time-class">TimeSignature Class</a></li>
      <li><a href="#properties">TimeSignature Properties</a></li>
    </ul>
  </section>
  <section>
    <h2 id="time-class">The TimeSignature Class</h2>
    <p>The class for time signatures is new with some basic tools for representing time signatures. It is very straightforward for anyone who is familiar with how time signatures work.</p>
    <h2>Creating a time signature</h2>
    <p>Simply intialize a TimeSignature by passing the two numbers as would be seen on sheet music as two arguments. The bottom number must represent a common rhythmic division used: 1, 2, 4, 8, 16, 32, 64, 128, 256, or 512.</p>
    <Python>
{`import pymusician as pm

common_time = pm.TimeSignature(4,4)
waltz_time = pm.TimeSignature(3,4)
cut_time = pm.TimeSignature(2,2)
`}
    </Python>
  </section>
  <section>
    <h2 id="properties">TimeSignature Properties</h2>
    <h3>self.top_number, self.bottom_number</h3>
    <p>These properties give the original values provided when the object was instantiated.</p>
    <Python>
{`import pymusician as pm

common_time = pm.TimeSignature(4,4)
waltz_time = pm.TimeSignature(3,4)
cut_time = pm.TimeSignature(2,2)

common_time.top_number # 4
waltz_time.top_number # 3
cut_time.bottom_number # 2
`}
    </Python>
    <h3>self.gets_beat</h3>
    <p>This gives a string name for the rhythm which "gets the beat." This comes from the bottom number of the signature.</p>
    <Python>
{`import pymusician as pm

common_time = pm.TimeSignature(4,4)
waltz_time = pm.TimeSignature(3,4)
cut_time = pm.TimeSignature(2,2)

common_time.gets_beat # "quarter"
waltz_time.gets_beat # "quarter"
cut_time.gets_beat # "half"
`}
    </Python>
    <h3>self.beat_len</h3>
    <p>This gives a number representing the rhythmic value (measured in 512th notes) of a single beat of time, given the signature.</p>
    <Python>
{`import pymusician as pm

common_time = pm.TimeSignature(4,4)
three_eight = pm.TimeSignature(3,8)
artsy_fartsy_time = pm.TimeSignature(200,512)

common_time.beat_len # 128
three_eight.beat_len # 64
artsy_fartsy_time.beat_len # 1
`}
    </Python>
    <h3>self.measure_len</h3>
    <p>This gives a number representing the rhythmic value of an entire measure, measured in <b>512th</b> notes.</p>
    <Python>
{`import pymusician as pm

common_time = pm.TimeSignature(4,4)
cut_time = pm.TimeSignature(2,2)
artsy_fartsy_time = pm.TimeSignature(200,512)

common_time.measure_len # 512
cut_time.measure_len # 512
artsy_fartsy_time.measure_len # 200
`}
    </Python>
  </section>
</DocContainer>