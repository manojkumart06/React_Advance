
//store, next, action

export const loggerMiddleware = (store) => {
    return function(next){
        return function(action){
            //log actions
            console.log("[LOG] :" +action.type+" "+new Date().toDateString());
            //calling next middleware in pipeline
            next(action);
            //log the modified state of App
            console.log(store.getState());
        }
    }
}