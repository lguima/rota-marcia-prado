/**
 * Analytics
 */
export default {
  googleTag: {
    enabled: import.meta.env.ANALYTICS_GOOGLE_TAG_ENABLED !== "false",
    measurementId: import.meta.env.ANALYTICS_GOOGLE_TAG_MEASUREMENT_ID ?? "G-X8970LK9KF"
  },
}
