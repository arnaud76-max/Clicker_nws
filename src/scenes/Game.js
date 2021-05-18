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
        var text;
        var counter = 0;
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
                 
                    this.add.image(240, 180, 'market')
                    .setScale(0.7)
                     this.add.image(350, 320, 'design')
                     .setScale(0.7)

                      this.add.image(70, 320, 'dev')
                     .setScale(0.7)

                        let nws   = this.add.sprite(game.config.width / 2, game.config.height / 2, ' nws');
                        let market = this.add.sprite(nws.x + 46, nws.y, "market");

                    var text = this.add.text(100, 0, '', { font: '64px Courier', fill: '#00ff00' });
                    this.data.set('score', 0);
                    text.setText([
                        'Score: ' + this.data.get('score')
                    ]);
                   this.add.image.anchor.set(0.5);

                   image.inputEnabled= true;

                    text = game.add.text(250, 16, '', { fill:'#ffffff'});

                    image.events.onInputDown.add(listener, this);

                 
            
             
    }
    update()
    {
            counter++;
            text.text ="Vous cliquer" + counter + "time!";
    }

}