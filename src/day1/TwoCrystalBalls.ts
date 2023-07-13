/*Given two crystal balls that will break if dropped from
 a high enough distance, determine the exact spot in which it will
  break in the most optimized way*/

export default function two_crystal_balls(breaks: boolean[]): number {
    //jump should be sqrt of arr length , ensure it's a whole number
    const jump_amount = Math.floor(Math.sqrt(breaks.length));
    let i = jump_amount;
    //check for breaks
    for (; i < breaks.length; i += jump_amount) {
        if (breaks[i] === true) {
            break;
        }
    }
    //go to last point before the ball breaks
    i -= jump_amount;
    //find exact index of the ball breaking
    for (let j = 0; j <= jump_amount && i < breaks.length; ++j, ++i) {
        if (breaks[i]) {
            return i;
        }
    }
    return -1;
}
