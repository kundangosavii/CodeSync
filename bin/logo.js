import boxen from 'boxen'
import figlet from 'figlet';
import gradient from 'gradient-string';
import chalk from 'chalk';

export function displayLogo() {

    const title = figlet.textSync('Code Analyzer', {
        font: 'Slant',
        horizontalLayout: 'default',
    })

    const gradientTitle = gradient.pastel.multiline(title);

    const box = boxen(gradientTitle,{
        padding: 1,
        margin: 1,
        borderStyle: 'round',
        borderColor: 'cyan',
    });

    console.log(box);
}