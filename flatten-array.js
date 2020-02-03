let target_array = [1, 2,[3,4, [5,6,0]],4,[3,7],0];
function flattern(arr){
    let res = [];
    let res2= [];
    var d = "";
    var b = "";
    dfs(arr, res);
    d = d + "DFS = ["
    for(let i = 0; i < res.length; i++){
        d+=res[i];
        if(i != res.length-1 ){
            d +=", ";
        }
        else{
            d +="]";
        }
    }
    console.log(d);
    bfs(arr, res2);
    b = b + "BFS = ["
    for(let i = 0; i < res2.length; i++){
        b+=res2[i];
        if(i != res2.length-1 ){
            b +=", ";
        }
        else{
            b +="]";
        }
    }
    console.log(b);
}
function dfs(node, res){
    if(!Array.isArray(node)){
        res.push(node);
    } 
    else {
        for(let item of node){
            dfs(item, res);
        }
    }
}
function bfs(node, res){
    let queue = [node];
    while(queue.length) {
        let head = queue.shift();
        if(!Array.isArray(head)){
            res.push(head);
        } 
        else {
            queue.push(...head);
        }
    }
}
flattern(target_array);