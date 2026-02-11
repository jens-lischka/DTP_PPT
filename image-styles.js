/**
 * Image Styles Configuration
 * Each style has metadata for the UI and a function to generate the prompt
 */

const IMAGE_STYLES = {
    1: {
        name: "Macro Close-up",
        emoji: "🔬",
        description: "Extreme detail",
        previewStyle: "background: linear-gradient(135deg, #2d5016, #4a7c23);",
        
        generatePrompt: function(subject, userPrompt) {
            const promptObj = {
                "task_type": "generation",
                "category": "close_up_photography",
                "style_id": "merged_close_up_macro_immersive",
                "intent": {
                    "primary": "produce an extreme close-up / macro-forward image with high tactile detail, cinematic realism, and disciplined composition",
                    "secondary": "blend translucent micro-texture study, frozen particulate energy, and immersive underwater barrel perspective into one coherent close-up style"
                },
                "scene": {
                    "type": "macro_immersive_environment",
                    "environment_notes": [
                        "the image should feel physically close to the subject matter (macro-forward)",
                        "even if the subject is large-scale (e.g., wave barrel + surfer), the camera is positioned as if inches away from critical textures (foam, micro-bubbles, water skin, surface detail)",
                        "background elements are present only as context and remain subordinate to close-up texture readability"
                    ]
                },
                "subject": {
                    "type": subject,
                    "rendering_goal": "hyperrealistic close-up with readable structure and material behavior",
                    "must_include_attributes": [
                        "fine micro-texture (papery layers OR micro-bubbles OR metallic fragments) is visible and sharp where intended",
                        "clear silhouette / primary form remains recognizable",
                        "no heavy stylization; realism first"
                    ]
                },
                "camera": {
                    "capture_style": "macro_forward_realism",
                    "lens_profile": {
                        "primary_lens_mm": 90,
                        "secondary_lens_mm": 135,
                        "context_lens_mm": 24,
                        "note": "simulate a macro-forward look even when using wide context perspective by placing the camera extremely close to foreground textures"
                    },
                    "aperture_strategy": {
                        "default": "f/8",
                        "variant": "f/2.8 for particle isolation",
                        "guidance": "prioritize close-up texture readability; shallow depth of field is allowed only when it improves isolation without losing essential structure"
                    },
                    "focus": {
                        "strategy": "flat_field_when_possible",
                        "priority_plane": "foreground texture plane (foam / papery layers / particles)",
                        "sharpness": "high micro-contrast on key textures",
                        "vignetting": "low",
                        "distortion": "minimal (avoid extreme fisheye)"
                    },
                    "shutter_simulation": {
                        "mode": "fast",
                        "purpose": "freeze sparks/particles/micro-droplets while allowing subtle controlled streaking where physically plausible"
                    },
                    "perspective": {
                        "type": "near_parallel_macro_with_immersive_pov",
                        "notes": [
                            "near-parallel macro feel for texture studies",
                            "immersive POV for underwater barrel scenes",
                            "world beyond may be softly warped by translucent media (water/foam), but keep the primary subject readable"
                        ]
                    }
                },
                "composition": {
                    "framing": {
                        "priority": "extreme_close_up",
                        "rule": "the frame should be dominated by texture and surface structure",
                        "cropping": "allowed but never at the expense of the main form being understandable"
                    },
                    "geometry": {
                        "primary": "stacked_S_curve",
                        "secondary": "tunnel_opening_guides_eye_outward",
                        "notes": [
                            "use S-curve layering when depicting layered/translucent surfaces",
                            "use barrel/tunnel geometry when depicting wave scenes",
                            "use directional streak vectors when depicting sparks"
                        ]
                    },
                    "subject_placement": {
                        "layout": "single_primary_subject_with_context",
                        "alignment": "center_or_rule_of_thirds",
                        "safe_padding_ratio": 0.12
                    },
                    "background": {
                        "type": "dark_cool_shadows_or_translucent_media",
                        "behavior": "non-distracting, supports subject isolation"
                    }
                },
                "lighting": {
                    "setup": "soft_studio_meets_natural_diffused",
                    "key_principles": [
                        "diffused light that reveals micro-structure",
                        "controlled highlights (no blowouts)",
                        "deep cool shadow field for contrast when particles are present",
                        "subtle caustic-like light effects allowed in underwater scenes if realistic"
                    ],
                    "key_light": {
                        "position": "top_front_right",
                        "intensity": "medium",
                        "diffusion": "high"
                    },
                    "fill_light": {
                        "position": "front",
                        "intensity": "low"
                    },
                    "highlight_control": {
                        "rule": "retain detail in bright sparks/foam reflections",
                        "avoid": "overexposure, cartoon glow"
                    },
                    "shadow_character": {
                        "tone": "cool",
                        "depth": "medium_to_deep",
                        "falloff": "soft"
                    }
                },
                "materials_and_particles": {
                    "translucent_surface_study": {
                        "enabled": true,
                        "targets": ["papery layers", "translucent membranes", "thin water skin", "foam sheets"],
                        "detail": ["fine ridges", "layer edges", "subtle curvature", "micro-bubble clusters"]
                    },
                    "spark_particle_study": {
                        "enabled": true,
                        "targets": ["orange sparks", "glowing particles", "metallic fragments"],
                        "behavior": {
                            "freeze": "primary",
                            "streaking": "subtle and physically plausible",
                            "glow": "contained realistic"
                        }
                    },
                    "underwater_media": {
                        "enabled": true,
                        "features": [
                            "micro-bubbles in foreground",
                            "translucent foam wall partially occluding",
                            "soft optical warping through water"
                        ]
                    }
                },
                "color": {
                    "palette_strategy": "selective_color_realism",
                    "earth_neutrals": {
                        "enabled": true,
                        "usage": "translucent layer studies",
                        "tone": "gentle warm neutrals",
                        "saturation": "low"
                    },
                    "sparks_contrast": {
                        "enabled": true,
                        "primary": "hot_orange",
                        "supporting_shadows": "deep_cool_blues",
                        "saturation": "high only on sparks"
                    },
                    "underwater": {
                        "enabled": true,
                        "primary": "turquoise",
                        "secondary": "white_foam",
                        "shadow_tone": "cool_deep"
                    },
                    "global_rules": {
                        "avoid": ["neon gradients", "overly stylized color grading"],
                        "white_balance": "neutral_to_warm (scene dependent)"
                    }
                },
                "mood": {
                    "combined_mood": "submerged quiet + restrained impact + anatomical study",
                    "keywords": [
                        "quiet",
                        "precise",
                        "immersive",
                        "tactile",
                        "dynamic_but_restrained",
                        "observational_realism"
                    ]
                },
                "constraints": {
                    "avoid": [
                        "cartoon or illustrative look",
                        "heavy stylization",
                        "overexposed highlights",
                        "busy background elements",
                        "strong vignetting",
                        "extreme fisheye distortion",
                        "CGI water that looks too clean or plastic",
                        "smoky haze filling the whole frame"
                    ],
                    "ensure": [
                        "close-up dominance: textures read first, context second",
                        "sharp micro-detail on key planes (foam/bubbles/ridges/particles)",
                        "recognizable primary form/silhouette",
                        "controlled highlights with preserved detail",
                        "cool shadow field supports contrast when sparks/particles appear",
                        "immersive perspective when underwater barrel context is used"
                    ]
                },
                "output": {
                    "format": "png",
                    "transparent_background": true,
                    "note": "if transparency is used, ensure shadows/highlights are baked into pixels and still readable on transparent canvas",
                    "recommended_resolution": "2048x2048",
                    "aspect_ratio": "1:1",
                    "quality": "high",
                    "color_profile": "sRGB"
                }
            };
            return "Create an image:\n" + JSON.stringify(promptObj, null, 2);
        }
    },

    2: {
        name: "Style 2",
        emoji: "🔜",
        description: "Coming soon",
        previewStyle: "background: linear-gradient(135deg, #e0e0e0, #9e9e9e);",
        comingSoon: true,
        
        generatePrompt: function(subject, userPrompt) {
            return userPrompt;
        }
    },

    3: {
        name: "Style 3",
        emoji: "🔜",
        description: "Coming soon",
        previewStyle: "background: linear-gradient(135deg, #e0e0e0, #9e9e9e);",
        comingSoon: true,
        
        generatePrompt: function(subject, userPrompt) {
            return userPrompt;
        }
    },

    4: {
        name: "Style 4",
        emoji: "🔜",
        description: "Coming soon",
        previewStyle: "background: linear-gradient(135deg, #e0e0e0, #9e9e9e);",
        comingSoon: true,
        
        generatePrompt: function(subject, userPrompt) {
            return userPrompt;
        }
    }
};

/**
 * Special "No Style" option - uses raw user prompt
 */
const IMAGE_STYLE_NONE = {
    name: "No Style",
    emoji: "✨",
    description: "Use prompt as-is",
    previewStyle: "background: linear-gradient(135deg, #0078d4, #106ebe);"
};

/**
 * Get the number of available styles (excluding "No Style")
 */
function getImageStyleCount() {
    return Object.keys(IMAGE_STYLES).length;
}

/**
 * Generate the full prompt for a given style and user input
 * @param {number} styleNum - Style number (0 = no style, 1-4 = styled)
 * @param {string} userPrompt - The user's original prompt text
 * @returns {string} The final prompt to send to the API
 */
function generateImagePrompt(styleNum, userPrompt) {
    // Style 0 = No style, use raw prompt
    if (styleNum === 0) {
        return userPrompt;
    }
    
    const style = IMAGE_STYLES[styleNum];
    if (!style || style.comingSoon) {
        // If style not found or coming soon, use raw prompt
        return userPrompt;
    }
    
    // Use the user's prompt as the subject
    return style.generatePrompt(userPrompt, userPrompt);
}

/**
 * Check if a style is available (not coming soon)
 */
function isImageStyleAvailable(styleNum) {
    if (styleNum === 0) return true;
    const style = IMAGE_STYLES[styleNum];
    return style && !style.comingSoon;
}
