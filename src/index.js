import HelloWorldButton from './components/hello-world-button/hello-world-button'
import addImage from './add-image'
import Heading from './components/heading/heading'

const heading = new Heading()
heading.render()

const heading2 = new Heading()
heading2.render()

const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();
const ten = 10

if (process.env.NODE_ENV === 'production') {
    console.log('production mode')
} else if (process.env.NODE_ENV === 'development') {
    console.log('development')
}