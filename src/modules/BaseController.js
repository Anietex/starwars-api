export default class BaseController {

    success(data,message=null){
        return {
            status: "success",
            message,
            data: data,

        }
    }

     error(message, data=null){

        return {
            status: "error",
            message:typeof message === 'string' ? message: message.message,
            data: data,

        }
    }
}
