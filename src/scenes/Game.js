import Phaser from '../lib/phaser.js'
import Dev from '../game/Dev.js'
import Market from '../game/Market.js'
import Design from '../game/Design.js'

export default class Game extends Phaser.Scenes
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
         this.preload.image('nws', 'assets/logo_nws.png')
        
    }

    create()
    {
            this.add.image(24,24, 'nws')
            .setScale(1.5)
    }
    update()
    {

    }

}