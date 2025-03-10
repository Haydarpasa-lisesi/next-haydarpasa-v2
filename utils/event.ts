import { TOKEN } from './token';

export async function createEvents(
  title: string,
  content: string,
  imageURL: string,
  dateTime: any,
  logoAlt: string,
  logoURL: string,
) {
  const res = await fetch(`/api/events?secret=${TOKEN}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title,
      content,
      imageURL,
      dateTime,
      logoAlt,
      logoURL,
    }),
  });
  const { event } = await res.json();
  return event;
}
export async function editEventById(
  id: string,
  title: string,
  content: string,
  imageURL: string,
  dateTime: any,
  logoAlt: string,
  logoURL: string,
) {
  const res = await fetch(`/api/events/${id}?secret=${TOKEN}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title,
      content,
      dateTime,
      imageURL,
      logoAlt,
      logoURL,
    }),
  });
  const { event } = await res.json();
  return event;
}
export async function deleteEventById(id: string) {
  const res = await fetch(`/api/events/${id}?secret=${TOKEN}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const { event } = await res.json();
  return event;
}
