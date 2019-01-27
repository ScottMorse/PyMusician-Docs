import DocContainer from './DocContainer'
import Python from './Python'

export default () => <DocContainer title="Getting Started">
  <Python>
{`# What hath God wrought?
import pymusician as pm
python = 1 + 1
for i in range(100):
    print("What the fuuuuck is going to happen when it's reeallly reallly long")`}
  </Python>
</DocContainer>