import Phaser from '../lib/phaser.js'


export default class Game extends Phaser.Scene
{
    constructor()
    {
        super('game')
    }
    init()
    {

    }

    preload()
    {
         this.load.image('nws', 'src/assets/logoNws.jpg')
        
    }

    create()
    {
            this.add.image(230,240, 'nws')
            .setScale(0.5)

            
    }
    update()
    {

    }

}