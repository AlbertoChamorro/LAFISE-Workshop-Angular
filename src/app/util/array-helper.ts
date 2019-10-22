declare interface Array<T> {
    paginate(pageSize: number, page: number): Array<T>;
}

Array.prototype.paginate = function<T>(pageSize: number, page: number): Array<T> {
    --page;
    return this.slice(page * pageSize, (page + 1) * pageSize);
};
