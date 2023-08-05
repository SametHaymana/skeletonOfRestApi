import { Request, Response } from 'express';
import { CatRepository } from '../repositories/cat.repository';
import { ResponseOk } from '../types/Responses/responses.types';
import { Cat } from '../models/cat.model';
import crypto from 'crypto';

class CatController {
  constructor(private catRepo: CatRepository) {}

  getAll(req: Request, res: Response) {
    const cats = this.catRepo.getAll();
    return res.json(new ResponseOk(undefined, cats));
  }

  getById(req: Request, res: Response) {
    const id = req.params.id;
    const cat = this.catRepo.getById(id);

    return res.json(new ResponseOk(undefined, cat));
  }

  create(req: Request, res: Response) {
    const { name } = req.body;
    const cat = this.catRepo.create(new Cat(crypto.randomUUID(), name));
    return res.json(new ResponseOk('Cat created', cat));
  }

  update(req: Request, res: Response) {
    const id = req.params.id;
    const { name } = req.body;
    const cat = this.catRepo.update(new Cat(id, name));
    return res.json(new ResponseOk('Cat updated', cat));
  }

  delete(req: Request, res: Response) {
    const id = req.params.id;
    const cat = this.catRepo.delete(id);
    return res.json(new ResponseOk('Cat deleted', cat));
  }
}

export const catController = new CatController(new CatRepository());
