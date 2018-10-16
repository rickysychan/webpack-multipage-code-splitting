import Kiwi from './kiwi.jpeg'
import './kiwi-img.scss'

class KiwiImage {
    render(){
        const img = document.createElement('img')
        img.src = Kiwi
        img.alt = 'kiwi'
        img.classList.add('kiwi-image')

        const bodyDomElement = document.querySelector('body')
        bodyDomElement.appendChild(img)
    }
}

export default KiwiImage