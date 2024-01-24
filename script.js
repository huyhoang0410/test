
{
    function logger () {
        let count;
        function tong (){
            return ++count
        }
        return tong
    }
}

const count1 = logger()

console.log(count1());
