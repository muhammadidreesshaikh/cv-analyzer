class dataService {

    constructor() {
        this.data = {};
    }

    setData(data) {
        this.data = data;
        console.log("dataService >", data);
    }

    getData() {
        return this.data;
    }

}
export default new dataService;