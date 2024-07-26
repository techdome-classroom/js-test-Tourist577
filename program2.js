
function func(s,p,index1,index2){
  
  if(index1==s.length && index2==p.length) return true;
  
  let ans=false;

  if(s[index1]===p[index2]){
    ans=ans | func(s,p,index+1,index2+1);
  }
  else if(p[index2]==='?'){
      ans=ans | func(s,p,index1+1,index2+1);
    }
  else if(p[index2]==='*'){

      
        ans=ans | func(s,p,index1+1,index2) | func(s,p,index1,index2+1);
    }
    else{
        return false;
    }
  
  return ans;
}

const decodeTheRing = function (s, p) {

    // write your code here

    return func(s,p,0,0);
  };
  
  module.exports = decodeTheRing;