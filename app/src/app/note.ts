import { api } from "../../../shared";
import fetch from "node-fetch";

const server = "http://localhost:3000";

export async function getMany(): Promise<api.Note.GetMany> {
  return (await fetch(`${server}/notes`).then((res) =>
    res.json()
  )) as api.Note.GetMany;
}

export async function get(id: string): Promise<api.Note.Get> {
  return (await fetch(`${server}/notes/${id}`).then((res) =>
    res.json()
  )) as api.Note.Get;
}

export async function post(note: api.Note.Post): Promise<api.Note.Get> {
  return (await fetch(`${server}/notes`, {
    method: "POST",
    body: JSON.stringify(note),
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json())) as api.Note.Get;
}

export async function put(
  id: string,
  note: api.Note.Put
): Promise<api.Note.Get> {
  return (await fetch(`${server}/notes/${id}`, {
    method: "PUT",
    body: JSON.stringify(note),
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json())) as api.Note.Get;
}

export async function del(id: string): Promise<api.Note.Get> {
  return (await fetch(`${server}/notes/${id}`, {
    method: "DELETE",
  }).then((res) => res.json())) as api.Note.Get;
}

export default { getMany, get, post, put, del };
