/**
 * YouTube Embed Plugin
 * Author: Hasin Hayder
 * URL: https://github.com/hasinhayder/storyteller-astro
 *
 * Usage:
 * #youtube eQXG75XirdE
 */

import { visit } from 'unist-util-visit';

export default function remarkYoutubeEmbed() {
  return (tree) => {
    visit(tree, 'paragraph', (node, index, parent) => {
      if (
        node.children.length === 1 &&
        node.children[0].type === 'text'
      ) {
        const match = node.children[0].value.match(/^#youtube\s+([\w-]+)$/);
        if (match) {
          const videoId = match[1];

          parent.children[index] = {
            type: 'html',
            value: `<div class="rounded-lg!" data-service="youtube" data-id="${videoId}" data-autoscale data-ratio="16:9" data-iframe-class="aspect-ratio rounded-lg" data-iframe-frameborder="0"></div>`
          };
        }
      }
    });
  };
}
