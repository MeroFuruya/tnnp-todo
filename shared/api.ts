export namespace Api {
  export namespace Note {
    export interface Get {
      id: string;
      title: string;
      description: string;
      createdAt: Date;
      doneAt: Date | null;
    }

    export interface GetMany {
      notes: Get[];
    }

    export interface Post {
      title: string;
      description: string;
      doneAt?: Date | null;
    }

    export interface Put {
      title?: string;
      description?: string;
      doneAt?: Date | null;
    }
  }
}
