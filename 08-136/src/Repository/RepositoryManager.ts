import { MockRepository } from "./MockRepository";
import { RepositoryType } from "./RepositoryType";

export const currentRepository: RepositoryType = new MockRepository()
