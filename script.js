const i18n = {
  en: {
    "nav.features": "Features",
    "nav.howItWorks": "How It Works",
    "nav.principles": "Principles",
    "nav.getStarted": "Get Started",
    "nav.install": "Install",
    "hero.badge": "Open Source &middot; MIT License &middot; v4.2",
    "hero.title1": "Deep web research,",
    "hero.title2": "verified and transparent.",
    "hero.desc": "Argus is a Perplexity-style research skill for OpenCode that conducts multi-phase web investigations, cross-verifies sources, and delivers answers with full citation transparency.",
    "hero.getStarted": "Get Started",
    "hero.howItWorks": "How It Works",
    "hero.stat1": "Research Phases",
    "hero.stat2": "Max Searches",
    "hero.stat3": "Response Modes",
    "hero.stat4": "Firecrawl Tools",
    "features.tag": "Features",
    "features.title": "Research that doesn't cut corners",
    "features.desc": "Argus goes beyond single-query search with a systematic framework designed for depth, accuracy, and accountability.",
    "features.f1.title": "4-Phase Search Framework",
    "features.f1.desc": "Broad exploration, targeted investigation, cross-verification, and comparative analysis \u2014 each query builds on the last.",
    "features.f2.title": "Source Verification",
    "features.f2.desc": "Every major claim is backed by citations in <code>[web:N]</code> format. No unverified assertions, no single-source reliance.",
    "features.f3.title": "Quantitative Data",
    "features.f3.desc": "Vague claims are rejected. Argus demands specific numbers \u2014 benchmarks, metrics, and measurable evidence.",
    "features.f4.title": "Adaptive Complexity",
    "features.f4.desc": "Simple questions get quick answers. Deep investigations get up to 14+ searches across multiple phases until saturation.",
    "features.f5.title": "Multi-Tool Integration",
    "features.f5.desc": "Leverages Firecrawl's full suite \u2014 search, scrape, agent, and map \u2014 for comprehensive web data extraction.",
    "features.f6.title": "Graceful Degradation",
    "features.f6.desc": "When tools fail or rate limits hit, Argus adapts \u2014 reducing scope, using fallbacks, or honestly stating limitations.",
    "how.tag": "How It Works",
    "how.title": "Systematic depth, not random queries",
    "how.desc": "Argus follows a structured 4-phase framework, scaling search intensity based on question complexity.",
    "how.phaseA.title": "Broad Exploration",
    "how.phaseA.desc": "Map the landscape. Identify core concepts, current state, and architecture. <strong>1-3 searches.</strong>",
    "how.phaseA.tag1": "Core Concepts",
    "how.phaseA.tag2": "Current State",
    "how.phaseA.tag3": "Architecture",
    "how.phaseB.title": "Targeted Investigation",
    "how.phaseB.desc": "Dive deep into implementation details, performance benchmarks, and real-world problems. <strong>4-6 searches.</strong>",
    "how.phaseB.tag1": "Tutorials",
    "how.phaseB.tag2": "Benchmarks",
    "how.phaseB.tag3": "Common Issues",
    "how.phaseC.title": "Cross-Verification",
    "how.phaseC.desc": "Verify major claims with 2+ independent sources. Check community sentiment and expert criticism. <strong>7-8 searches.</strong>",
    "how.phaseC.tag1": "Criticism",
    "how.phaseC.tag2": "Community",
    "how.phaseC.tag3": "Fact-Check",
    "how.phaseD.title": "Comparative Analysis",
    "how.phaseD.desc": "Compare alternatives, assess future trends, and fill remaining gaps. <strong>9-10+ searches.</strong>",
    "how.phaseD.tag1": "Alternatives",
    "how.phaseD.tag2": "Roadmap",
    "how.phaseD.tag3": "Gap Fill",
    "how.complexity.title": "Complexity-Driven Search Depth",
    "how.complexity.col1": "Complexity",
    "how.complexity.col2": "Searches",
    "how.complexity.col3": "Example",
    "how.complexity.r1.level": "1-2 Simple",
    "how.complexity.r1.example": '\u201cWhat is Docker?\u201d',
    "how.complexity.r2.level": "3 Moderate",
    "how.complexity.r2.example": '\u201cHow to use React hooks\u201d',
    "how.complexity.r3.level": "4 Significant",
    "how.complexity.r3.example": '\u201cReact vs Vue performance\u201d',
    "how.complexity.r4.level": "5 Deep",
    "how.complexity.r4.example": '\u201cK8s migration strategy\u201d',
    "principles.tag": "Principles",
    "principles.title": "What Argus will never do",
    "principles.desc": "Clear rules prevent common AI research failures.",
    "principles.p1": "Assert facts without verification through search",
    "principles.p2": "Make major claims based on a single source",
    "principles.p3": "Present numerical data without citing a source",
    "principles.p4": "Present outdated information as current",
    "modes.title": "Three Response Modes",
    "modes.m1.title": "Implementation",
    "modes.m1.flow": "Quick Start \u2192 Steps \u2192 Config \u2192 Troubleshooting",
    "modes.m1.triggers": '\u201chow to\u201d \u00b7 \u201csetup\u201d \u00b7 \u201cimplement\u201d',
    "modes.m2.title": "Architecture",
    "modes.m2.flow": "Answer \u2192 Components \u2192 Comparison \u2192 Deep Dive",
    "modes.m2.triggers": '\u201chow it works\u201d \u00b7 \u201ccompare\u201d \u00b7 \u201carchitecture\u201d',
    "modes.m3.title": "Research",
    "modes.m3.flow": "Summary \u2192 Analysis \u2192 Alternatives \u2192 Roadmap",
    "modes.m3.triggers": '\u201crecommend\u201d \u00b7 \u201canalyze\u201d \u00b7 \u201cpros cons\u201d',
    "started.tag": "Get Started",
    "started.title": "Up and running in minutes",
    "started.desc": "Argus works as an OpenCode agent skill. Install it, trigger it with natural language, and let it research.",
    "started.s1.title": "Prerequisites",
    "started.s1.desc": "You need <strong>OpenCode</strong> and <strong>Firecrawl</strong> tools activated (<code>firecrawl_search</code>, <code>firecrawl_scrape</code>, <code>firecrawl_agent</code>, <code>firecrawl_map</code>).",
    "started.s2.title": "Install the Skill",
    "started.s2.desc": "Place the skill file in your OpenCode skills directory. Argus auto-activates when it detects research intent.",
    "started.s3.title": "Just Ask",
    "started.s3.desc": 'Use natural language: <em>\u201cCompare React vs Vue performance in 2025\u201d</em> \u2014 Argus handles the rest.',
    "started.triggers.title": "Trigger Words",
    "footer.desc": "Deep web research for OpenCode.",
    "footer.docs": "Documentation",
    "meta.title": "Argus \u2014 Deep Web Research for OpenCode",
    "meta.desc": "Argus is a Perplexity-style deep web research skill for OpenCode. Multi-source verification, quantitative data, and transparent citations."
  },
  ko: {
    "nav.features": "\uae30\ub2a5",
    "nav.howItWorks": "\uc791\ub3d9 \uc6d0\ub9ac",
    "nav.principles": "\uc6d0\uce59",
    "nav.getStarted": "\uc2dc\uc791\ud558\uae30",
    "nav.install": "\uc124\uce58",
    "hero.badge": "\uc624\ud508\uc18c\uc2a4 &middot; MIT \ub77c\uc774\uc13c\uc2a4 &middot; v4.2",
    "hero.title1": "\uc2ec\uce35 \uc6f9 \ub9ac\uc11c\uce58,",
    "hero.title2": "\uac80\uc99d\ub41c \ud22c\uba85\ud55c \uacb0\uacfc.",
    "hero.desc": "Argus\ub294 OpenCode \ud658\uacbd\uc5d0\uc11c \ub3d9\uc791\ud558\ub294 Perplexity \ud615\uc2dd\uc758 \uc2ec\uce35 \uc6f9 \ub9ac\uc11c\uce58 \uc2a4\ud0ac\uc785\ub2c8\ub2e4. \ub2e4\ub2e8\uacc4 \uc6f9 \uc870\uc0ac, \ub2e4\uc911 \ucd9c\ucc98 \uad50\ucc28 \uac80\uc99d, \uc644\uc804\ud55c \uc778\uc6a9 \ud22c\uba85\uc131\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4.",
    "hero.getStarted": "\uc2dc\uc791\ud558\uae30",
    "hero.howItWorks": "\uc791\ub3d9 \uc6d0\ub9ac",
    "hero.stat1": "\ub9ac\uc11c\uce58 \ub2e8\uacc4",
    "hero.stat2": "\ucd5c\ub300 \uac80\uc0c9",
    "hero.stat3": "\uc751\ub2f5 \ubaa8\ub4dc",
    "hero.stat4": "Firecrawl \ub3c4\uad6c",
    "features.tag": "\uae30\ub2a5",
    "features.title": "\ub300\ucda9 \ub124\uba70\uac00\uc9c0 \uc54a\ub294 \ub9ac\uc11c\uce58",
    "features.desc": "Argus\ub294 \uae4a\uc774, \uc815\ud655\ub3c4, \uc815\ud655\uc131\uc744 \uacfc\ud559\uc801\uc73c\ub85c \uc124\uacc4\ub41c \uc2dc\uc2a4\ud15c\uc801 \ud504\ub808\uc784\uc6cc\ud06c\ub97c \ud1b5\ud574 \ub2e8\uc77c \ucffc\ub9ac \uac80\uc0c9\uc744 \ub118\uc5b4\uc11d\ub2c8\ub2e4.",
    "features.f1.title": "4\ub2e8\uacc4 \uac80\uc0c9 \ud504\ub808\uc784\uc6cc\ud06c",
    "features.f1.desc": "\uad11\ubc94\uc704 \ud0d0\uc0c9, \ud0c0\uac9f \uc870\uc0ac, \uad50\ucc28 \uac80\uc99d, \ube44\uad50 \ubd84\uc11d \u2014 \ubaa8\ub4e0 \ucffc\ub9ac\uac00 \uc774\uc804 \uacb0\uacfc\ub97c \ubc14\ud0d5\uc73c\ub85c \ud655\uc7a5\ub429\ub2c8\ub2e4.",
    "features.f2.title": "\ucd9c\ucc98 \uac80\uc99d",
    "features.f2.desc": "\ubaa8\ub4e0 \uc8fc\uc694 \uc8fc\uc7a5\uc740 <code>[web:N]</code> \ud615\uc2dd\uc758 \uc778\uc6a9\uc73c\ub85c \ub4dc\ub7ec\uc11d\ub2c8\ub2e4. \uac80\uc99d\ub418\uc9c0 \uc54a\uc740 \uc8fc\uc7a5 \uae08\uc9c0, \ub2e8\uc77c \ucd9c\ucc98 \uc758\uc874 \uc5c6\uc74c.",
    "features.f3.title": "\uc815\ub7c9\uc801 \ub370\uc774\ud130",
    "features.f3.desc": "\ubaa8\ud638\ud55c \uc8fc\uc7a5\uc740 \uac70\ubd80\ub41c\ub2e4. Argus\ub294 \uad6c\uccb4\uc801 \uc218\uce58 \u2014 \ubca4\uce70\ub9c8\ud06c, \uba54\ud2b8\ub9ad, \uce21\uc815 \uac00\ub2a5\ud55c \uc99d\uac70\ub97c \uc694\uad6c\ud569\ub2c8\ub2e4.",
    "features.f4.title": "\uc801\uc751\ud615 \ubcf5\uc7a1\ub3c4",
    "features.f4.desc": "\uac04\ub2e8\ud55c \uc9c8\ubb38\uc740 \ube60\ub978 \ub2f5\ubcc0\uc744, \uc2ec\uce35 \uc870\uc0ac\ub294 14\ud68c \uc774\uc0c1\uc758 \uac80\uc0c9\uc73c\ub85c \uc815\ubcf4 \ud3ec\ud654 \uc2dc\uae4c\uc9c0 \ub2e4\ub2e8\uacc4\ub97c \uc218\ud589\ud569\ub2c8\ub2e4.",
    "features.f5.title": "\ub2e4\uc911 \ub3c4\uad6c \ud1b5\ud569",
    "features.f5.desc": "Firecrawl \uc804\uccb4 \uc2dc\uc2a4\ud15c \u2014 search, scrape, agent, map \u2014 \uc744 \ud65c\uc6a9\ud55c \uc885\ud569\uc801 \uc6f9 \ub370\uc774\ud130 \ucd94\ucd9c.",
    "features.f6.title": "\uc6b0\uc544\ud55c \ucd5c\uc801\ud654 (Graceful Degradation)",
    "features.f6.desc": "\ub3c4\uad6c \uc2e4\ud328 \ub610\ub294 \uc694\uccad \uc81c\ud55c \uc2dc, Argus\ub294 \ubc94\uc704 \ucd95\uc18c, \ub300\uccb4 \uc218\ub2e8, \ub610\ub294 \uc81c\ud55c \uc0ac\ud56d \ud22c\uba85 \uacf5\uac1c\ub85c \ub300\uc751\ud569\ub2c8\ub2e4.",
    "how.tag": "\uc791\ub3d9 \uc6d0\ub9ac",
    "how.title": "\uc784\uc758\uc758 \uac80\uc0c9\uc774 \uc544\ub2cc, \uacc4\ud1b5\uc801 \uc2ec\uce35",
    "how.desc": "Argus\ub294 \uc9c8\ubb38\uc758 \ubcf5\uc7a1\ub3c4\uc5d0 \ub530\ub77c \uac80\uc0c9 \uac15\ub3c4\ub97c \uc870\uc808\ud558\uba70, \uad6c\uc870\ud654\ub41c 4\ub2e8\uacc4 \ud504\ub808\uc784\uc6cc\ud06c\ub97c \ub530\ub984\ub2c8\ub2e4.",
    "how.phaseA.title": "\uad11\ubc94\uc704 \ud0d0\uc0c9",
    "how.phaseA.desc": "\uc804\uccb4 \uc9c0\ub3c4\ub97c \ub9e4\ud551\ud569\ub2c8\ub2e4. \ud575\uc2ec \uac1c\ub150, \ud604\ud669, \uad6c\uc870\ub97c \ud30c\uc545\ud569\ub2c8\ub2e4. <strong>1-3\ud68c \uac80\uc0c9.</strong>",
    "how.phaseA.tag1": "\ud575\uc2ec \uac1c\ub150",
    "how.phaseA.tag2": "\ud604\ud669",
    "how.phaseA.tag3": "\uad6c\uc870",
    "how.phaseB.title": "\ud0c0\uac9f \uc870\uc0ac",
    "how.phaseB.desc": "\uad6c\ud604 \uc0c1\uc138, \uc131\ub2a5 \ubca4\uce70\ub9c8\ud06c, \uc2e4\uc81c \ubb38\uc81c \ub4f1\uc744 \uc2ec\uce35\uc801\uc73c\ub85c \uc870\uc0ac\ud569\ub2c8\ub2e4. <strong>4-6\ud68c \uac80\uc0c9.</strong>",
    "how.phaseB.tag1": "\ud29c\ud1a0\ub9ac\uc5bc",
    "how.phaseB.tag2": "\ubca4\uce70\ub9c8\ud06c",
    "how.phaseB.tag3": "\ud750\ud55c \ubb38\uc81c",
    "how.phaseC.title": "\uad50\ucc28 \uac80\uc99d",
    "how.phaseC.desc": "2\uac1c \uc774\uc0c1\uc758 \ub3c5\ub9bd\uc801 \ucd9c\ucc98\ub85c \uc8fc\uc694 \uc8fc\uc7a5\uc744 \uac80\uc99d\ud569\ub2c8\ub2e4. \ucee4\ubba4\ub2c8\ud2f0 \uc5ec\ub860\uacfc \uc804\ubb38\uac00 \ube44\ud3c9\uc744 \ud655\uc778\ud569\ub2c8\ub2e4. <strong>7-8\ud68c \uac80\uc0c9.</strong>",
    "how.phaseC.tag1": "\ube44\ud3c9",
    "how.phaseC.tag2": "\ucee4\ubba4\ub2c8\ud2f0",
    "how.phaseC.tag3": "\ud329\ud2b8\uccb4\ud06c",
    "how.phaseD.title": "\ube44\uad50 \ubd84\uc11d",
    "how.phaseD.desc": "\ub300\uc548 \ube44\uad50, \ud5a5\ud6c4 \uc804\ub9dd, \ub0a8\uc740 \uacbd\uc6b0 \ucc44\uc6b0\uae30 \ub4f1\uc744 \uc218\ud589\ud569\ub2c8\ub2e4. <strong>9-10+\ud68c \uac80\uc0c9.</strong>",
    "how.phaseD.tag1": "\ub300\uc548",
    "how.phaseD.tag2": "\ub85c\ub4dc\ub9f5",
    "how.phaseD.tag3": "\uacbd\uc6b0 \ucc44\uc6b0\uae30",
    "how.complexity.title": "\ubcf5\uc7a1\ub3c4 \uae30\ubc18 \uac80\uc0c9 \uae4a\uc774",
    "how.complexity.col1": "\ubcf5\uc7a1\ub3c4",
    "how.complexity.col2": "\uac80\uc0c9 \ud68c\uc218",
    "how.complexity.col3": "\uc608\uc2dc",
    "how.complexity.r1.level": "1-2 \uac04\ub2e8",
    "how.complexity.r1.example": "\u201cDocker\ub780?\u201d",
    "how.complexity.r2.level": "3 \ubcf4\ud1b5",
    "how.complexity.r2.example": "\u201cReact hooks \uc0ac\uc6a9\ubc95\u201d",
    "how.complexity.r3.level": "4 \uc2ec\ud654",
    "how.complexity.r3.example": "\u201cReact vs Vue \uc131\ub2a5 \ube44\uad50\u201d",
    "how.complexity.r4.level": "5 \uc2ec\uce35",
    "how.complexity.r4.example": "\u201cK8s \ub9c8\uc774\uadf8\ub808\uc774\uc158 \uc804\ub7b5\u201d",
    "principles.tag": "\uc6d0\uce59",
    "principles.title": "Argus\uac00 \uc808\ub300 \ud558\uc9c0 \uc54a\ub294 \uac83",
    "principles.desc": "\uba85\ud655\ud55c \uaddc\uce59\uc774 \uc77c\ubc18\uc801 AI \ub9ac\uc11c\uce58 \uc2e4\ud328\ub97c \ub9c9\uc2b5\ub2c8\ub2e4.",
    "principles.p1": "\uac80\uc0c9\uc744 \ud1b5\ud55c \uac80\uc99d \uc5c6\uc774 \uc0ac\uc2e4\uc744 \uc8fc\uc7a5\ud558\ub294 \uac83",
    "principles.p2": "\ub2e8\uc77c \ucd9c\ucc98\ub9cc\uc73c\ub85c \uc911\ub300\ud55c \uc8fc\uc7a5\uc744 \ud558\ub294 \uac83",
    "principles.p3": "\ucd9c\ucc98 \uc778\uc6a9 \uc5c6\uc774 \uc218\uce58 \ub370\uc774\ud130\ub97c \uc81c\uc2dc\ud558\ub294 \uac83",
    "principles.p4": "\uc624\ub798\ub41c \uc815\ubcf4\ub97c \ucd5c\uc2e0 \uc815\ubcf4\uc778 \uac83\ucc98\ub7fc \uc81c\uc2dc\ud558\ub294 \uac83",
    "modes.title": "3\uac00\uc9c0 \uc751\ub2f5 \ubaa8\ub4dc",
    "modes.m1.title": "\uad6c\ud604 (Implementation)",
    "modes.m1.flow": "\ube60\ub978 \uc2dc\uc791 \u2192 \ub2e8\uacc4 \u2192 \uc124\uc815 \u2192 \ud2b8\ub7ec\ube14\uc297\ud305",
    "modes.m1.triggers": "\u201c\uc5b4\ub5bb\uac8c\u201d \u00b7 \u201c\uc124\uc815\u201d \u00b7 \u201c\uad6c\ud604\u201d",
    "modes.m2.title": "\uc544\ud0a4\ud14d\ucc98 (Architecture)",
    "modes.m2.flow": "\ub2f5\ubcc0 \u2192 \uad6c\uc131\uc694\uc18c \u2192 \ube44\uad50 \u2192 \uc2ec\uce35 \ubd84\uc11d",
    "modes.m2.triggers": "\u201c\uc791\ub3d9 \uc6d0\ub9ac\u201d \u00b7 \u201c\ube44\uad50\u201d \u00b7 \u201c\uad6c\uc870\u201d",
    "modes.m3.title": "\ub9ac\uc11c\uce58 (Research)",
    "modes.m3.flow": "\uc694\uc57d \u2192 \ubd84\uc11d \u2192 \ub300\uc548 \u2192 \ub85c\ub4dc\ub9f5",
    "modes.m3.triggers": "\u201c\ucd94\ucc9c\u201d \u00b7 \u201c\ubd84\uc11d\u201d \u00b7 \u201c\uc7a5\ub2e8\uc810\u201d",
    "started.tag": "\uc2dc\uc791\ud558\uae30",
    "started.title": "\uba87 \ubd84 \ub9cc\uc5d0 \uc2dc\uc791\ud558\uc138\uc694",
    "started.desc": "Argus\ub294 OpenCode \uc5d0\uc774\uc804\ud2b8 \uc2a4\ud0ac\ub85c \ub3d9\uc791\ud569\ub2c8\ub2e4. \uc124\uce58\ud558\uace0, \uc790\uc5f0\uc5b4\ub85c \ud2b8\ub9ac\uac70\ud558\uc138\uc694. \ub098\uba38\uc9c0\ub294 Argus\uac00 \ucc98\ub9ac\ud569\ub2c8\ub2e4.",
    "started.s1.title": "\uc0ac\uc804 \uc694\uad6c\uc0ac\ud56d",
    "started.s1.desc": "<strong>OpenCode</strong>\uc640 <strong>Firecrawl</strong> \ub3c4\uad6c\uac00 \ud65c\uc131\ud654\ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4 (<code>firecrawl_search</code>, <code>firecrawl_scrape</code>, <code>firecrawl_agent</code>, <code>firecrawl_map</code>).",
    "started.s2.title": "\uc2a4\ud0ac \uc124\uce58",
    "started.s2.desc": "OpenCode skills \ub514\ub809\ud1a0\ub9ac\uc5d0 \uc2a4\ud0ac \ud30c\uc77c\uc744 \ub123\uc73c\uc138\uc694. Argus\ub294 \ub9ac\uc11c\uce58 \uc758\ub3c4\ub97c \uac10\uc9c0\ud558\uba74 \uc790\ub3d9 \ud65c\uc131\ud654\ub429\ub2c8\ub2e4.",
    "started.s3.title": "\ubb3c\uc5b4\ubcf4\uae30",
    "started.s3.desc": "\uc790\uc5f0\uc5b4\ub85c \uc9c8\ubb38\ud558\uc138\uc694: <em>\u201c2025\ub144 React vs Vue \uc131\ub2a5 \ube44\uad50\ud574\uc8fc\u201d</em> \u2014 \ub098\uba38\uc9c0\ub294 Argus\uac00 \ucc98\ub9ac\ud569\ub2c8\ub2e4.",
    "started.triggers.title": "\ud2b8\ub9ac\uac70 \ud0a4\uc6cc\ub4dc",
    "footer.desc": "OpenCode\ub97c \uc704\ud55c \uc2ec\uce35 \uc6f9 \ub9ac\uc11c\uce58 \uc2a4\ud0ac.",
    "footer.docs": "\ubb38\uc11c",
    "meta.title": "Argus \u2014 OpenCode \uc6f9 \ub9ac\uc11c\uce58 \uc2a4\ud0ac",
    "meta.desc": "Argus\ub294 OpenCode \ud658\uacbd\uc5d0\uc11c \ub3d9\uc791\ud558\ub294 Perplexity \ud615\uc2dd\uc758 \uc2ec\uce35 \uc6f9 \ub9ac\uc11c\uce58 \uc2a4\ud0ac\uc785\ub2c8\ub2e4. \ub2e4\uc911 \ucd9c\ucc98 \uad50\ucc28 \uac80\uc99d, \uc815\ub7c9\uc801 \ub370\uc774\ud130, \ud22c\uba85\ud55c \uc778\uc6a9."
  }
};

let currentLang = 'en';

function applyLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  const t = i18n[lang];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  if (t['meta.title']) document.title = t['meta.title'];
  const descMeta = document.querySelector('meta[name="description"]');
  if (descMeta && t['meta.desc']) descMeta.setAttribute('content', t['meta.desc']);

  const label = lang === 'en' ? '\ud55c\uad6d\uc5b4' : 'English';
  const desktopLabel = document.getElementById('langLabel');
  const mobileLabel = document.getElementById('langLabelMobile');
  if (desktopLabel) desktopLabel.textContent = label;
  if (mobileLabel) mobileLabel.textContent = label;

  try { localStorage.setItem('argus-lang', lang); } catch(e) {}
}

function toggleLang() {
  applyLang(currentLang === 'en' ? 'ko' : 'en');
}

(function init() {
  var saved = 'en';
  try { saved = localStorage.getItem('argus-lang') || 'en'; } catch(e) {}
  applyLang(saved);

  var langBtn = document.getElementById('langToggle');
  if (langBtn) langBtn.onclick = toggleLang;

  var langBtnMobile = document.getElementById('langToggleMobile');
  if (langBtnMobile) langBtnMobile.onclick = toggleLang;

  var navToggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');
  if (navToggle && navLinks) {
    navToggle.onclick = function() {
      navToggle.classList.toggle('active');
      navLinks.classList.toggle('open');
    };
    navLinks.querySelectorAll('a').forEach(function(link) {
      link.onclick = function() {
        navToggle.classList.remove('active');
        navLinks.classList.remove('open');
      };
    });
  }

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { root: null, rootMargin: '0px 0px -40px 0px', threshold: 0.1 });

  ['.feature-card', '.phase', '.principle-card', '.mode-card', '.install-step', '.complexity-table-wrapper', '.trigger-examples'].forEach(function(sel) {
    document.querySelectorAll(sel).forEach(function(el, i) {
      el.classList.add('fade-in');
      el.style.transitionDelay = (i * 0.05) + 's';
      observer.observe(el);
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      var target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        var offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 64;
        var top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  var nav = document.querySelector('.nav');
  if (nav) {
    window.addEventListener('scroll', function() {
      nav.style.borderBottomColor = window.scrollY > 10
        ? 'var(--color-border)'
        : 'var(--color-border-light)';
    }, { passive: true });
  }
})();
