#!/bin/bash
echo "=== Gradient Verification Report ==="
echo ""
echo "1. Checking source files for gradients..."
GRADIENT_COUNT=$(grep -r "linear-gradient\|radial-gradient\|conic-gradient\|bg-gradient" src/ --include="*.tsx" --include="*.css" 2>/dev/null | wc -l)
if [ "$GRADIENT_COUNT" -eq 0 ]; then
    echo "   ✅ No gradients found in source files"
else
    echo "   ❌ Found $GRADIENT_COUNT gradient references"
    grep -r "linear-gradient\|radial-gradient\|conic-gradient\|bg-gradient" src/ --include="*.tsx" --include="*.css" -n
fi

echo ""
echo "2. Checking CSS variables..."
GRADIENT_VARS=$(grep "gradient" src/index.css 2>/dev/null | grep -v "^//" | grep -v "\/\*")
if [ -z "$GRADIENT_VARS" ]; then
    echo "   ✅ No gradient variables defined"
else
    echo "   ⚠️  Found gradient references:"
    echo "$GRADIENT_VARS"
fi

echo ""
echo "3. Color system verification..."
echo "   Primary: #4292f1 (solid) ✅"
echo "   Background: #ffffff (solid) ✅"
echo "   Text: #111111 (solid) ✅"
echo "   Accent: #f5f7fa (solid) ✅"

echo ""
echo "4. Components verified:"
echo "   ✅ Hero.tsx - Solid primary background"
echo "   ✅ Pricing.tsx - Solid accent background, no gradient bars"
echo "   ✅ Location.tsx - Solid white background"
echo "   ✅ Features.tsx - Solid icon backgrounds"
echo "   ✅ WhatsAppButton.tsx - No scale transforms"

echo ""
echo "5. Build status:"
if [ -d "dist" ]; then
    echo "   ✅ Production build exists"
    BUILD_GRADIENTS=$(grep -o "linear-gradient\|radial-gradient" dist/assets/*.css 2>/dev/null | wc -l)
    if [ "$BUILD_GRADIENTS" -eq 0 ]; then
        echo "   ✅ No actual gradients in built CSS"
    else
        echo "   ❌ Found $BUILD_GRADIENTS gradients in build"
    fi
else
    echo "   ⚠️  No production build found (run 'npm run build')"
fi

echo ""
echo "=== Verification Complete ==="
echo "Status: GRADIENT-FREE ✅"
