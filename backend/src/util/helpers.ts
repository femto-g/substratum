export function routeAsyncCatch(fn : any) {
  return async (req : any, res : any, next : any) => {
    try{
      return await fn(req, res, next);
    }catch(e){
      return next(e);
    }
  }
}
