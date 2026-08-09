import { getCollection } from 'astro:content';

async function getActiveAlertsBySeverity(severities: number[]) {
  const now = new Date();

  const alerts = await getCollection('alert', ({ data }) => {
    const isCorrectSeverity = severities.includes(data.severity);
    const isPublished = now >= new Date(data.publishDate);
    const notExpired = !data.expirationDate || now <= new Date(data.expirationDate);

    return isCorrectSeverity && data.active && isPublished && notExpired;
  });

  return alerts.toSorted((a, b) => {
    if (a.data.severity !== b.data.severity) {
      return a.data.severity - b.data.severity;
    }
    return new Date(b.data.publishDate).getTime() - new Date(a.data.publishDate).getTime();
  });
}

export async function getActiveAlerts() {
  return getActiveAlertsBySeverity([1, 2, 3, 4]);
}

export async function getActivePriorityAlerts() {
  return getActiveAlertsBySeverity([1, 2]);
}

export async function getActiveSecondaryAlerts() {
  return getActiveAlertsBySeverity([3, 4]);
}
