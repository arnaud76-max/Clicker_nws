import Phaser from '../lib/phaser.js'
import Nws from '../game/Nws.js'

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
        this.load.image('background', 'src/assets/seineInno.jpg')
         this.load.image('nws', 'src/assets/logo_nws.png')
         this.load.image('market', 'src/assets/logo-marketing.png')
         this.load.image('design', 'src/assets/logo-design.png')
         this.load.image('dev', 'src/assets/logo-dev.png')
    }

    create()
    {

            this.add.image(320,250, 'nws')
            .setScale(0.2)
            this.add.image(100,200, 'market')
            .setScale(0.7)
            this.add.image(340,200, 'design')
            .setScale(0.7)
            this.add.image(220,360, 'dev')
            .setScale(0.7)

            this.palyer={
                clickDmg: 1,
                gold: 0
            };

            this.nws = this.physics.add.group({
                classType: Nws
            })

            
    }
    update()
    {

    }

}