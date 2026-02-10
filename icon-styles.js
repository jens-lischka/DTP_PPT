/**
 * Icon Styles Configuration
 * Each style has metadata for the UI and a function to generate the prompt
 */

const ICON_STYLES = {
  1: {
    name: "Liquid Metal Matte",
    emoji: "🪙",
    description: "Photorealistic matte metal",
    previewStyle: "background: linear-gradient(135deg, #f5f5f5, #d9d9d9);",

    generatePrompt: function (subject) {
      return {
        "object": subject,
        "task_type": "generation",
        "priority": {
          "primary": "create a photorealistic rendition of the object made from liquid metal with a matte surface",
          "secondary": "preserve the object's recognizable functionality and silhouette"
        },
        "material": {
          "type": "liquid metal",
          "variants": ["aluminum", "lead"],
          "properties": {
            "viscosity": "thick and smooth",
            "finish": "matte metallic (low reflectivity, soft specular only)",
            "surface_behavior": "fluid contours with realistic weight, stabilized into the final form",
            "color": "silver-metallic"
          }
        },
        "subject": {
          "description": "the object sculpted from liquid metal with a matte metallic surface",
          "attributes": {
            "form": "faithful to the original object's shape",
            "texture": "matte metallic liquid surface (no mirror reflections)",
            "pose": "studio product angle"
          }
        },
        "environment": {
          "background": "transparent",
          "lighting": {
            "type": "soft studio",
            "direction": "front",
            "quality": "diffused with clean, subtle highlights (no harsh reflections)"
          }
        },
        "style": {
          "artistic": "photorealistic",
          "camera": {
            "angle": "eye_level",
            "lens": "normal",
            "aperture": "shallow_depth_of_field"
          },
          "mood": "sleek and modern"
        },
        "technical": {
          "resolution": "high",
          "aspect_ratio": "1:1",
          "quality": "maximum"
        },
        "constraints": {
          "avoid": [
            "cartoon look",
            "distorted shapes",
            "melting or collapsing form",
            "mirror-like reflections",
            "high-gloss finish",
            "busy background"
          ],
          "ensure": [
            "recognizable object shape",
            "realistic metal behavior",
            "matte metallic surface",
            "transparent background"
          ]
        },
        "output_specs": {
          "file_type": "png",
          "transparent_background": true,
          "quality": "high"
        }
      };
    }
  },

    2: {
        name: "3D Clay",
        emoji: "🏺",
        description: "Dark blue matte",
        previewStyle: "background: linear-gradient(135deg, #000F47, #001a5c);",
        
        generatePrompt: function(subject) {
            return {
                "object": subject,
                "task_type": "generation",
                "priority": {
                    "primary": "create a photorealistic 3D render of the object with no texture",
                    "secondary": "preserve the object's silhouette and physical accuracy"
                },
                "material": {
                    "type": "untextured_3d_clay",
                    "properties": {
                        "color": "#000F47",
                        "finish": "matte",
                        "surface": "clean and uniform with no visible texture",
                        "details": "subtle highlights and soft shading to define the object's shape"
                    }
                },
                "subject": {
                    "description": "the object rendered as an untextured dark-blue clay-style 3D model",
                    "attributes": {
                        "form": "precise and accurate to the object's silhouette",
                        "texture": "none",
                        "pose": "studio product angle"
                    }
                },
                "environment": {
                    "background": "transparent",
                    "lighting": {
                        "type": "soft studio",
                        "direction": "front",
                        "quality": "diffused with gentle highlights on the dark surface"
                    }
                },
                "style": {
                    "artistic": "photorealistic 3D render",
                    "camera": {
                        "angle": "eye_level",
                        "lens": "normal",
                        "aperture": "shallow_depth_of_field"
                    },
                    "mood": "minimalistic and clean"
                },
                "technical": {
                    "resolution": "high",
                    "aspect_ratio": "1:1",
                    "quality": "maximum"
                },
                "constraints": {
                    "avoid": [
                        "colors besides the dark clay tone",
                        "textures",
                        "metallic reflections",
                        "cartoon look"
                    ],
                    "ensure": [
                        "clean clay look",
                        "object silhouette clear and readable"
                    ]
                },
                "output_specs": {
                    "file_type": "high_resolution_image",
                    "transparent_background": true
                }
            };
        }
    },

    3: {
        name: "Photo Realism",
        emoji: "📷",
        description: "Hyperrealistic",
        previewStyle: "background: linear-gradient(135deg, #f5f5f5, #e0e0e0);",
        
        generatePrompt: function(subject) {
            return {
                "scene": {
                    "type": "product_studio",
                    "environment": "neutral",
                    "background": {
                        "type": "transparent",
                        "color": null,
                        "alpha": 0,
                        "note": "canvas is transparent; object lighting and shadows are baked into pixels"
                    }
                },
                "subject": {
                    "type": subject,
                    "description": [
                        "hyperrealistic",
                        "isolated",
                        "centered",
                        "fully visible",
                        "never cropped"
                    ],
                    "surface_integrity": "clean",
                    "edges": "sharp"
                },
                "style": {
                    "category": "photorealistic_product",
                    "rendering": "high_fidelity",
                    "material_accuracy": "high",
                    "no_stylization": true
                },
                "camera": {
                    "angle": "front_three_quarter",
                    "position": "fixed",
                    "distance": "consistent",
                    "lens_effects": {
                        "distortion": "none",
                        "depth_of_field": "minimal"
                    }
                },
                "lighting": {
                    "setup": "studio_softbox",
                    "key_light": {
                        "position": "top_front_right",
                        "intensity": "medium",
                        "diffusion": "high"
                    },
                    "fill_light": {
                        "position": "front",
                        "intensity": "low"
                    },
                    "rim_light": {
                        "enabled": false
                    }
                },
                "shadow": {
                    "enabled": true,
                    "type": "soft_contact_shadow",
                    "direction": "left_back",
                    "length": "short",
                    "opacity": 0.2,
                    "note": "shadow should remain visible on transparent background"
                },
                "composition": {
                    "layout": "single_object",
                    "alignment": "center",
                    "surrounding_elements": "none",
                    "safe_padding_ratio": 0.15
                },
                "text_rules": {
                    "allowed": true,
                    "constraint": "only_if_physically_part_of_object",
                    "external_text": false,
                    "labels_or_overlays": false
                },
                "output": {
                    "format": "png",
                    "transparent_background": true,
                    "recommended_resolution": "2048x2048",
                    "color_profile": "sRGB"
                }
            };
        }
    },

    4: {
        name: "Isometric Flat",
        emoji: "🔷",
        description: "Corporate geometric",
        previewStyle: "background: linear-gradient(135deg, #000F47, #163A78);",
        
        generatePrompt: function(subject) {
            return {
                "object": subject,
                "task_type": "generation",
                "priority": {
                    "primary": "create a clean, modern, isometric icon of the object using flat geometric surfaces",
                    "secondary": "use only white and dark blue shades with minimal shading"
                },
                "style": {
                    "type": "isometric_flat",
                    "characteristics": {
                        "outline": "none",
                        "shading": "minimal, soft gradients only where necessary",
                        "palette": "white + shades of dark blue",
                        "surface": "clean matte surfaces (no texture)",
                        "edge_behavior": "hard geometric edges, no rounded shapes",
                        "render_feel": "flat 3D icon, not cute, not diorama-like",
                        "scene_depth": "shallow isometric depth, no layered terrain"
                    },
                    "color_palette": {
                        "white": "#FFFFFF",
                        "blue_dark": "#000F47",
                        "blue_mid": "#163A78",
                        "blue_light": "#DCE7FF",
                        "background": "transparent"
                    }
                },
                "subject": {
                    "description": "the object rendered as a sharp geometric isometric icon made of white and dark-blue surfaces",
                    "attributes": {
                        "pose": "isometric 30° angle",
                        "form_style": "clean geometry, low detail, faceted surfaces",
                        "materials": "matte white and matte dark-blue planes",
                        "integration": "no platform, no base, the object stands alone"
                    }
                },
                "lighting": {
                    "type": "soft_directional",
                    "direction": "upper-left",
                    "quality": "minimalistic, clear edge contrast",
                    "shadows": "very soft isometric shadow under object"
                },
                "environment": {
                    "background": "transparent",
                    "atmosphere": "bright, clean, minimal"
                },
                "technical": {
                    "resolution": "1024x1024",
                    "aspect_ratio": "1:1",
                    "quality": "maximum"
                },
                "constraints": {
                    "avoid": [
                        "cute or rounded stylization",
                        "photorealism",
                        "soft organic shapes",
                        "textures, wood, stone, fabric",
                        "diorama platforms or floating islands",
                        "multi-layer terrain",
                        "outlines"
                    ],
                    "ensure": [
                        "clean isometric geometry",
                        "white + dark-blue color scheme only",
                        "flat 3D surfaces with sharp edges",
                        "minimal shading",
                        "modern corporate look",
                        "transparent background"
                    ]
                },
                "output_specs": {
                    "file_type": "high_resolution_image",
                    "transparent_background": true
                }
            };
        }
    }
};

/**
 * Get the number of available styles
 */
function getStyleCount() {
    return Object.keys(ICON_STYLES).length;
}

/**
 * Get style metadata for UI rendering
 */
function getStyleMetadata(styleNum) {
    const style = ICON_STYLES[styleNum];
    if (!style) return null;
    return {
        name: style.name,
        emoji: style.emoji,
        description: style.description,
        previewStyle: style.previewStyle
    };
}

/**
 * Generate the full prompt JSON for a given style and subject
 */
function generateIconPrompt(styleNum, subject) {
    const style = ICON_STYLES[styleNum];
    if (!style) {
        return `Icon of ${subject}, clean simple design, centered, high quality`;
    }
    const promptObj = style.generatePrompt(subject);
    return "Create an image:\n" + JSON.stringify(promptObj, null, 2);
}

/**
 * Check if a style number is valid
 */
function isValidStyle(styleNum) {
    return ICON_STYLES.hasOwnProperty(styleNum);
}
