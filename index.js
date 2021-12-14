function receivesAFunction(spy){
    spy();
}

function returnsANamedFunction() {
    let fn = function() {
          console.log('name');
    }
    return fn;
}

function returnsAnAnonymousFunction(){
    return function(){
    }
  }
