import { Router,Request,Response} from "express";

const router = Router();

router.get("/", (req:Request, res:Response) => {
    res.send( "Hello World CNP" );

});

router.post("/", (req:Request, res:Response) => {

    const {name} = req.body;

    res.send( `Hello Gonzalec ${name}`);

});

export default router;


