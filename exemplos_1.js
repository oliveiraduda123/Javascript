import rl from 'readline-sync'

let ddd = rl.questionInt('Infome o DDD:');

switch (ddd) {
    case 69:
        console.log('Rondônia');
        break;
    case 21:
        console.log('Rio de Janeiro');
        break;
    case 65:
        console.log('Mato Grosso');
        break;
    default:
        console.log('DDD nao encontrado');
        break;
}
