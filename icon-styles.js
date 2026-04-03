/**
 * Icon Styles Configuration
 * Each style has metadata for the UI and a function to generate the prompt
 */

const ICON_STYLES = {
    1: {
generatePrompt: function(subject) {
    return {
        "instruction": "Generate a minimal geometric line icon. Follow ALL rules strictly. No deviation allowed.",

        "style_anchor": "OW_LINE_ICON_SYSTEM_V1_STRICT_MINIMAL",

        "object": "line_icon",
        "task_type": "generation",

        "subject": {
            "type": subject,
            "description": "reduced to a simple geometric, functional representation"
        },

        "execution_rules": {
            "strict_mode": true,
            "priority_order": [
                "structure_rules",
                "color_rules",
                "visual_grammar",
                "composition",
                "constraints"
            ],
            "failure_condition": "if any rule is violated, regenerate"
        },

        "structural_canon": {
            "element_types": {
                "outline_elements": {
                    "usage": "stroke_only",
                    "stroke_color": "#000f47",
                    "stroke_weight": "thin_uniform",
                    "fill": "none"
                },
                "highlight_elements": {
                    "usage": "fill_only",
                    "fill_color": "#0b4bff",
                    "stroke": "none"
                },
                "neutral_elements": {
                    "usage": "optional_fill",
                    "fill_color": "#FFFFFF",
                    "stroke": "#000f47"
                }
            },
            "rules": [
                "never mix fill and stroke in the same element",
                "highlight is used sparingly for emphasis only",
                "all primary structure must be outline-based"
            ]
        },

        "visual_grammar": {
            "allowed_shapes": [
                "straight_lines",
                "rectangles",
                "circles"
            ],
            "curve_usage": "only if functionally required",
            "geometry_style": "clean, technical, minimal",
            "detail_level": "low",
            "max_shapes": 6,
            "max_highlight_elements": 2
        },

        "composition": {
            "layout": "single_object_or_compact_group",
            "alignment": "center",
            "scale": "object fills 70% of canvas",
            "padding": "equal_on_all_sides",
            "rotation": "none unless inherent to object",
            "ground_line": {
                "allowed": true,
                "style": "thin_line",
                "color": "#000f47"
            }
        },

        "color_rules": {
            "outline_color": "#000f47",
            "highlight_color": "#0b4bff",
            "neutral_fill": "#FFFFFF",
            "max_colors": 2,
            "strict_palette": true
        },

        "limits": {
            "max_elements": 6,
            "max_colors": 2,
            "no_background_elements": true,
            "no_decorative_details": true
        },

        "constraints": {
            "forbidden": [
                "gradients",
                "shadows",
                "textures",
                "3D effects",
                "photorealism",
                "decorative shapes",
                "complex scenes",
                "background color"
            ],
            "required": [
                "clean geometric reduction",
                "uniform stroke weight",
                "minimal composition",
                "clear visual hierarchy"
            ]
        },

        "background": {
            "type": "transparent"
        },

        "self_check": {
            "verify_before_output": [
                "all strokes use #000f47",
                "all fills are either #0b4bff or #FFFFFF",
                "no gradients or shading present",
                "no element mixes stroke and fill",
                "shape count does not exceed 6",
                "composition is centered and balanced"
            ]
        },

        "output_specs": {
            "file_type": "png",
            "quality": "high",
            "transparent_background": true,
            "resolution": "1024x1024"
        }
    };
}

        
    },




    
    2: {
        name: "Spot (White BG)",
        emoji: "⬜",
        description: "Flat 2D, white bg",
        avatar: "style-icon-2.png",
        previewStyle: "background: #FFFFFF; border: 2px solid #FFBF00;",
        
        generatePrompt: function(subject) {
            return {
                "object": "spot_illustration",
                "task_type": "generation",
                "priority": {
                    "primary": "flat 2D illustration in the Oliver Wyman brand style",
                    "secondary": "strict separation between outline-only and fill-only elements"
                },
                "subject": {
                    "type": subject,
                    "description": "simplified geometric representation"
                },
                "parameters": {
                    "structure_rules": {
                        "outline_elements": {
                            "usage": "outline_only",
                            "line_color": "#000B39",
                            "line_weight": "thin",
                            "no_fill": true
                        },
                        "filled_elements": {
                            "usage": "fill_only",
                            "fill_colors": ["#000B39", "#FFBF00", "#C4C4C4"],
                            "no_outline": true
                        },
                        "rule_description": "each element must be either pure outline OR pure fill; never combine both in one shape"
                    },
                    "illustration_style": {
                        "geometry": "simplified_geometric",
                        "dimensionality": "flat_2D",
                        "avoid_detail": true
                    },
                    "color_usage": {
                        "primary": "#000B39",
                        "highlight": "#FFBF00",
                        "contrast": "#C4C4C4",
                        "exclude": ["Sky Blue", "#FFFFFF in objects"]
                    },
                    "background": {
                        "color": "#FFFFFF",
                        "type": "solid"
                    }
                },
                "constraints": {
                    "avoid": [
                        "mixing fill and outline in a single shape",
                        "3D shading",
                        "gradients",
                        "textures",
                        "organic curves",
                        "realistic detail",
                        "Sky Blue"
                    ],
                    "ensure": [
                        "all outlines are #000B39 only",
                        "all filled shapes have NO outline",
                        "clean geometric reduction",
                        "balanced composition"
                    ]
                },
                "output_specs": {
                    "file_type": "png",
                    "quality": "high"
                }
            };
        }
    },

    3: {
        name: "Photo Realism",
        emoji: "📷",
        description: "Hyperrealistic",
        avatar: "style-icon-3.png",
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
        avatar: "style-icon-4.png",
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
