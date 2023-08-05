import { Cat } from '../models/cat.model';
import { NotFound } from '../types/Errors/errors.types';

interface ICatRepository {
  getAll(): Cat[];
  getById(id: number): Cat | null;
  create(cat: Cat): void;
  update(cat: Cat): void;
  delete(id: number): void;
}

export class CatRepository implements CatRepository {
  private cats: Cat[] = [];

  getAll(): Cat[] {
    return this.cats;
  }

  getById(id: string): Cat | null {
    const cat = this.cats.find((cat) => cat.id === id) || null;
    if (!cat) {
      throw new NotFound('Cat not found.');
    }
    return cat;
  }

  create(cat: Cat): Cat {
    this.cats.push(cat);
    return cat;
  }

  update(cat: Cat): Cat {
    const index = this.cats.findIndex((c) => c.id === cat.id);
    if (index !== -1) this.cats[index] = cat;
    return cat;
  }

  delete(id: string): Cat {
    const cat = this.cats.find((cat) => cat.id !== id);
    this.cats = this.cats.filter((cat) => cat.id !== id);
    if (!cat) {
      throw new NotFound('Cat not found.');
    }
    return cat;
  }
}
