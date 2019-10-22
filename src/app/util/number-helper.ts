declare interface Number {
    toArray(): number[];
}

Number.prototype.toArray = function(): number[] {
    return Array.from(Array(this.valueOf()).keys()).map(n => n + 1);
};
