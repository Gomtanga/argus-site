const i18n = {
  en: {
    "nav.features": "Features",
    "nav.howItWorks": "How It Works",
    "nav.principles": "Principles",
    "nav.getStarted": "Get Started",
    "nav.install": "Install",
    "hero.badge": "Open Source &middot; MIT License &middot; v4.5",
    "hero.title1": "Deep web research,",
    "hero.title2": "calibrated by evidence.",
    "hero.desc": "Argus is a Perplexity-style research skill for OpenCode that conducts multi-phase web investigations, grades claim confidence, and keeps every major conclusion traceable to its evidence.",
    "hero.getStarted": "Get Started",
    "hero.howItWorks": "How It Works",
    "hero.release": "v4.5 Release",
    "hero.stat1": "Research Phases",
    "hero.stat2": "Claim Levels",
    "hero.stat3": "Source Tiers",
    "hero.stat4": "Response Modes",
    "features.tag": "Features",
    "features.title": "Research that knows its own limits",
    "features.desc": "Argus v4.5 goes beyond search volume with a framework designed for conservative claims, source quality, and transparent uncertainty.",
    "features.f1.title": "4-Phase Search Framework",
    "features.f1.desc": "Broad exploration, targeted investigation, cross-verification, and comparative analysis \u2014 each query builds on the last.",
    "features.f2.title": "Evidence Calibration",
    "features.f2.desc": "Major claims are labeled as Verified, Supported, Anecdotal, Unverified, or Speculative before synthesis.",
    "features.f3.title": "Numeric Claim Discipline",
    "features.f3.desc": "Numbers are used only when directly relevant, source-verifiable, dated, and tied to the claim they support.",
    "features.f4.title": "Claim Coverage Matrix",
    "features.f4.desc": "Research reports show which claims have primary-source coverage and which need downgrading or verification.",
    "features.f5.title": "Source Tiering",
    "features.f5.desc": "Sources are sorted from S-tier primary evidence to D-tier weak leads, preventing weak sources from sounding authoritative.",
    "features.f6.title": "Strong Language Guardrails",
    "features.f6.desc": "Terms like standard, production-proven, verified, and community consensus require qualifying evidence.",
    "how.tag": "How It Works",
    "how.title": "Systematic depth, calibrated conclusions",
    "how.desc": "Argus follows a structured 4-phase framework, then downgrades claims when the evidence is weak or indirect.",
    "how.phaseA.title": "Broad Exploration",
    "how.phaseA.desc": "Map the landscape. Identify core concepts, current state, and architecture. <strong>1-3 searches.</strong>",
    "how.phaseA.tag1": "Core Concepts",
    "how.phaseA.tag2": "Current State",
    "how.phaseA.tag3": "Architecture",
    "how.phaseB.title": "Targeted Investigation",
    "how.phaseB.desc": "Dive deep into implementation details, directly relevant metrics, and real-world problems. <strong>4-6 searches.</strong>",
    "how.phaseB.tag1": "Tutorials",
    "how.phaseB.tag2": "Benchmarks",
    "how.phaseB.tag3": "Common Issues",
    "how.phaseC.title": "Cross-Verification",
    "how.phaseC.desc": "Classify major claims by evidence level and check primary-source coverage. <strong>7-8 searches.</strong>",
    "how.phaseC.tag1": "Criticism",
    "how.phaseC.tag2": "Community",
    "how.phaseC.tag3": "Fact-Check",
    "how.phaseD.title": "Comparative Analysis",
    "how.phaseD.desc": "Compare alternatives, assess future trends, and fill remaining gaps. <strong>9-10+ searches.</strong>",
    "how.phaseD.tag1": "Alternatives",
    "how.phaseD.tag2": "Roadmap",
    "how.phaseD.tag3": "Gap Fill",
    "how.complexity.title": "Evidence Confidence Levels",
    "how.complexity.col1": "Level",
    "how.complexity.col2": "Evidence",
    "how.complexity.col3": "Wording",
    "how.complexity.r1.level": "Verified",
    "how.complexity.r1.evidence": "Official or primary source",
    "how.complexity.r1.example": '\u201cconfirmed\u201d',
    "how.complexity.r2.level": "Supported",
    "how.complexity.r2.evidence": "Credible secondary sources",
    "how.complexity.r2.example": '\u201cevidence suggests\u201d',
    "how.complexity.r3.level": "Anecdotal",
    "how.complexity.r3.evidence": "Community reports",
    "how.complexity.r3.example": '\u201cusers report\u201d',
    "how.complexity.r4.level": "Unverified",
    "how.complexity.r4.evidence": "Weak or single source",
    "how.complexity.r4.example": '\u201crequires verification\u201d',
    "principles.tag": "Principles",
    "principles.title": "What Argus will never do",
    "principles.desc": "Clear rules prevent common AI research failures and overconfident reports.",
    "principles.p1": "Assert facts without verification through search",
    "principles.p2": "Make major claims based on a single source",
    "principles.p3": "Force numbers just to satisfy a metric quota",
    "principles.p4": "Call something standard, verified, or production-proven without qualifying evidence",
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
    "started.desc": "Argus works as an OpenCode agent skill. Install it, trigger it with natural language, and let it research conservatively.",
    "started.s1.title": "Prerequisites",
    "started.s1.desc": "You need <strong>OpenCode</strong> and <strong>Firecrawl</strong> access through the CLI, Python SDK, or direct HTTP.",
    "started.s2.title": "Install the Skill",
    "started.s2.desc": "Install the v4.5 skill files in your OpenCode skills directory, including the <code>references/</code> folder.",
    "started.s3.title": "Just Ask",
    "started.s3.desc": 'Use natural language: <em>\u201cCompare React vs Vue performance in 2026 and flag weak evidence\u201d</em> \u2014 Argus handles the rest.',
    "started.triggers.title": "Trigger Words",
    "footer.desc": "Deep web research for OpenCode.",
    "footer.docs": "v4.5 Release",
    "meta.title": "Argus \u2014 Evidence-Calibrated Research for OpenCode",
    "meta.desc": "Argus v4.5 is an evidence-calibrated deep web research skill for OpenCode. It classifies claims by confidence level, checks source quality, and cites every major claim."
  },
  ko: {
    "nav.features": "\uae30\ub2a5",
    "nav.howItWorks": "\uc791\ub3d9 \uc6d0\ub9ac",
    "nav.principles": "\uc6d0\uce59",
    "nav.getStarted": "\uc2dc\uc791\ud558\uae30",
    "nav.install": "\uc124\uce58",
    "hero.badge": "\uc624\ud508\uc18c\uc2a4 &middot; MIT \ub77c\uc774\uc13c\uc2a4 &middot; v4.5",
    "hero.title1": "\uc2ec\uce35 \uc6f9 \ub9ac\uc11c\uce58,",
    "hero.title2": "\uadfc\uac70 \uc218\uc900\uc73c\ub85c \ubcf4\uc815\ub41c \uacb0\ub860.",
    "hero.desc": "Argus\ub294 OpenCode \ud658\uacbd\uc5d0\uc11c \ub3d9\uc791\ud558\ub294 Perplexity \ud615\uc2dd\uc758 \uc2ec\uce35 \uc6f9 \ub9ac\uc11c\uce58 \uc2a4\ud0ac\uc785\ub2c8\ub2e4. \ub2e4\ub2e8\uacc4 \uc6f9 \uc870\uc0ac, \uc8fc\uc7a5 \uc2e0\ub8b0\ub3c4 \ubd84\ub958, \uadfc\uac70 \ucd94\uc801 \uac00\ub2a5\ud55c \uacb0\ub860\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4.",
    "hero.getStarted": "\uc2dc\uc791\ud558\uae30",
    "hero.howItWorks": "\uc791\ub3d9 \uc6d0\ub9ac",
    "hero.release": "v4.5 \ub9b4\ub9ac\uc988",
    "hero.stat1": "\ub9ac\uc11c\uce58 \ub2e8\uacc4",
    "hero.stat2": "\uc8fc\uc7a5 \ub4f1\uae09",
    "hero.stat3": "\ucd9c\ucc98 \ud2f0\uc5b4",
    "hero.stat4": "\uc751\ub2f5 \ubaa8\ub4dc",
    "features.tag": "\uae30\ub2a5",
    "features.title": "\uc790\uc2e0\uc758 \ud55c\uacc4\ub97c \uc544\ub294 \ub9ac\uc11c\uce58",
    "features.desc": "Argus v4.5\ub294 \uac80\uc0c9\ub7c9 \uc790\uccb4\ubcf4\ub2e4 \ubcf4\uc218\uc801 \uc8fc\uc7a5, \ucd9c\ucc98 \ud488\uc9c8, \ud22c\uba85\ud55c \ubd88\ud655\uc2e4\uc131\uc744 \uc911\uc2ec\uc5d0 \ub461\ub2c8\ub2e4.",
    "features.f1.title": "4\ub2e8\uacc4 \uac80\uc0c9 \ud504\ub808\uc784\uc6cc\ud06c",
    "features.f1.desc": "\uad11\ubc94\uc704 \ud0d0\uc0c9, \ud0c0\uac9f \uc870\uc0ac, \uad50\ucc28 \uac80\uc99d, \ube44\uad50 \ubd84\uc11d \u2014 \ubaa8\ub4e0 \ucffc\ub9ac\uac00 \uc774\uc804 \uacb0\uacfc\ub97c \ubc14\ud0d5\uc73c\ub85c \ud655\uc7a5\ub429\ub2c8\ub2e4.",
    "features.f2.title": "\uadfc\uac70 \ubcf4\uc815",
    "features.f2.desc": "\uc8fc\uc694 \uc8fc\uc7a5\uc744 Verified, Supported, Anecdotal, Unverified, Speculative\ub85c \ubd84\ub958\ud55c \ub4a4 \uc885\ud569\ud569\ub2c8\ub2e4.",
    "features.f3.title": "\uc218\uce58 \uc8fc\uc7a5 \uaddc\uce59",
    "features.f3.desc": "\uc218\uce58\ub294 \ud575\uc2ec \uc8fc\uc7a5\uacfc \uc9c1\uc811 \uad00\ub828\ub418\uace0, \ucd9c\ucc98\u00b7\uc2dc\uc810\u00b7\ud604\uc7ac\uc131\uc774 \ud655\uc778\ub420 \ub54c\ub9cc \uc0ac\uc6a9\ud569\ub2c8\ub2e4.",
    "features.f4.title": "Claim Coverage Matrix",
    "features.f4.desc": "\ubcf4\uace0\uc11c\uc5d0\uc11c \uc5b4\ub5a4 \uc8fc\uc7a5\uc774 1\ucc28 \ucd9c\ucc98\ub85c \ud655\uc778\ub410\uace0, \uc5b4\ub5a4 \uc8fc\uc7a5\uc774 \ub4f1\uae09 \ud558\ud5a5\uc774 \ud544\uc694\ud55c\uc9c0 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4.",
    "features.f5.title": "\ucd9c\ucc98 \ud2f0\uc5b4\ub9c1",
    "features.f5.desc": "\uacf5\uc2dd/1\ucc28 \ucd9c\ucc98\ubd80\ud130 \uc57d\ud55c \ub2e8\uc11c\uae4c\uc9c0 S/A/B/C/D\ub85c \uad6c\ubd84\ud574 \uc57d\ud55c \ucd9c\ucc98\uac00 \uad8c\uc704 \uc788\uac8c \ubcf4\uc774\ub294 \uac83\uc744 \ub9c9\uc2b5\ub2c8\ub2e4.",
    "features.f6.title": "\uac15\ud55c \ud45c\ud604 \uac00\ub4dc\ub808\uc77c",
    "features.f6.desc": "\ud45c\uc900, \ud504\ub85c\ub355\uc158 \uac80\uc99d, \uac80\uc99d \uc644\ub8cc, \ucee4\ubba4\ub2c8\ud2f0 \ucee8\uc13c\uc11c\uc2a4 \uac19\uc740 \ud45c\ud604\uc740 \uc870\uac74\uc744 \ub9cc\uc871\ud574\uc57c \uc0ac\uc6a9\ud569\ub2c8\ub2e4.",
    "how.tag": "\uc791\ub3d9 \uc6d0\ub9ac",
    "how.title": "\uccb4\uacc4\uc801 \uae4a\uc774, \ubcf4\uc815\ub41c \uacb0\ub860",
    "how.desc": "Argus\ub294 \uad6c\uc870\ud654\ub41c 4\ub2e8\uacc4 \ud504\ub808\uc784\uc6cc\ud06c\ub97c \ub530\ub974\uace0, \uadfc\uac70\uac00 \uc57d\ud558\uac70\ub098 \uac04\uc811\uc801\uc774\uba74 \uc8fc\uc7a5\uc758 \ud655\uc2e0\ub3c4\ub97c \ub0ae\ucdb0 \ud45c\ud604\ud569\ub2c8\ub2e4.",
    "how.phaseA.title": "\uad11\ubc94\uc704 \ud0d0\uc0c9",
    "how.phaseA.desc": "\uc804\uccb4 \uc9c0\ub3c4\ub97c \ub9e4\ud551\ud569\ub2c8\ub2e4. \ud575\uc2ec \uac1c\ub150, \ud604\ud669, \uad6c\uc870\ub97c \ud30c\uc545\ud569\ub2c8\ub2e4. <strong>1-3\ud68c \uac80\uc0c9.</strong>",
    "how.phaseA.tag1": "\ud575\uc2ec \uac1c\ub150",
    "how.phaseA.tag2": "\ud604\ud669",
    "how.phaseA.tag3": "\uad6c\uc870",
    "how.phaseB.title": "\ud0c0\uac9f \uc870\uc0ac",
    "how.phaseB.desc": "\uad6c\ud604 \uc0c1\uc138, \uc9c1\uc811 \uad00\ub828\ub41c \uc218\uce58, \uc2e4\uc81c \ubb38\uc81c \ub4f1\uc744 \uc2ec\uce35\uc801\uc73c\ub85c \uc870\uc0ac\ud569\ub2c8\ub2e4. <strong>4-6\ud68c \uac80\uc0c9.</strong>",
    "how.phaseB.tag1": "\ud29c\ud1a0\ub9ac\uc5bc",
    "how.phaseB.tag2": "\ubca4\uce70\ub9c8\ud06c",
    "how.phaseB.tag3": "\ud750\ud55c \ubb38\uc81c",
    "how.phaseC.title": "\uad50\ucc28 \uac80\uc99d",
    "how.phaseC.desc": "\uc8fc\uc694 \uc8fc\uc7a5\uc744 \uadfc\uac70 \uc218\uc900\ubcc4\ub85c \ubd84\ub958\ud558\uace0 1\ucc28 \ucd9c\ucc98 \ud655\uc778 \uc5ec\ubd80\ub97c \uc810\uac80\ud569\ub2c8\ub2e4. <strong>7-8\ud68c \uac80\uc0c9.</strong>",
    "how.phaseC.tag1": "\ube44\ud3c9",
    "how.phaseC.tag2": "\ucee4\ubba4\ub2c8\ud2f0",
    "how.phaseC.tag3": "\ud329\ud2b8\uccb4\ud06c",
    "how.phaseD.title": "\ube44\uad50 \ubd84\uc11d",
    "how.phaseD.desc": "\ub300\uc548 \ube44\uad50, \ud5a5\ud6c4 \uc804\ub9dd, \ub0a8\uc740 \uacbd\uc6b0 \ucc44\uc6b0\uae30 \ub4f1\uc744 \uc218\ud589\ud569\ub2c8\ub2e4. <strong>9-10+\ud68c \uac80\uc0c9.</strong>",
    "how.phaseD.tag1": "\ub300\uc548",
    "how.phaseD.tag2": "\ub85c\ub4dc\ub9f5",
    "how.phaseD.tag3": "\uacbd\uc6b0 \ucc44\uc6b0\uae30",
    "how.complexity.title": "\uadfc\uac70 \uc2e0\ub8b0\ub3c4 \ub4f1\uae09",
    "how.complexity.col1": "\ub4f1\uae09",
    "how.complexity.col2": "\uadfc\uac70",
    "how.complexity.col3": "\ud45c\ud604",
    "how.complexity.r1.level": "Verified",
    "how.complexity.r1.evidence": "\uacf5\uc2dd \ub610\ub294 1\ucc28 \ucd9c\ucc98",
    "how.complexity.r1.example": "\u201c\ud655\uc778\ub428\u201d",
    "how.complexity.r2.level": "Supported",
    "how.complexity.r2.evidence": "\uc2e0\ub8b0 \uac00\ub2a5\ud55c 2\ucc28 \ucd9c\ucc98",
    "how.complexity.r2.example": "\u201c\uadfc\uac70\uac00 \uc2dc\uc0ac\ud568\u201d",
    "how.complexity.r3.level": "Anecdotal",
    "how.complexity.r3.evidence": "\ucee4\ubba4\ub2c8\ud2f0 \ubcf4\uace0",
    "how.complexity.r3.example": "\u201c\uc0ac\uc6a9\uc790\ub4e4\uc774 \ubcf4\uace0\ud568\u201d",
    "how.complexity.r4.level": "Unverified",
    "how.complexity.r4.evidence": "\uc57d\ud55c \ub610\ub294 \ub2e8\uc77c \ucd9c\ucc98",
    "how.complexity.r4.example": "\u201c\uac80\uc99d \ud544\uc694\u201d",
    "principles.tag": "\uc6d0\uce59",
    "principles.title": "Argus\uac00 \uc808\ub300 \ud558\uc9c0 \uc54a\ub294 \uac83",
    "principles.desc": "\uba85\ud655\ud55c \uaddc\uce59\uc774 \uc77c\ubc18\uc801 AI \ub9ac\uc11c\uce58 \uc2e4\ud328\uc640 \uacfc\ud55c \ud655\uc2e0\uc744 \ub9c9\uc2b5\ub2c8\ub2e4.",
    "principles.p1": "\uac80\uc0c9\uc744 \ud1b5\ud55c \uac80\uc99d \uc5c6\uc774 \uc0ac\uc2e4\uc744 \uc8fc\uc7a5\ud558\ub294 \uac83",
    "principles.p2": "\ub2e8\uc77c \ucd9c\ucc98\ub9cc\uc73c\ub85c \uc911\ub300\ud55c \uc8fc\uc7a5\uc744 \ud558\ub294 \uac83",
    "principles.p3": "\uc9c0\ud45c \ud560\ub2f9\ub7c9\uc744 \ucc44\uc6b0\uae30 \uc704\ud574 \uc218\uce58\ub97c \uc5b5\uc9c0\ub85c \ub123\ub294 \uac83",
    "principles.p4": "\uc870\uac74\uc744 \ub9cc\uc871\ud558\ub294 \uadfc\uac70 \uc5c6\uc774 \ud45c\uc900, \uac80\uc99d \uc644\ub8cc, \ud504\ub85c\ub355\uc158 \uac80\uc99d\uc774\ub77c\uace0 \ub9d0\ud558\ub294 \uac83",
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
    "started.desc": "Argus\ub294 OpenCode \uc5d0\uc774\uc804\ud2b8 \uc2a4\ud0ac\ub85c \ub3d9\uc791\ud569\ub2c8\ub2e4. \uc124\uce58\ud558\uace0, \uc790\uc5f0\uc5b4\ub85c \ud2b8\ub9ac\uac70\ud558\uc138\uc694. \ub098\uba38\uc9c0\ub294 Argus\uac00 \ubcf4\uc218\uc801\uc73c\ub85c \uc870\uc0ac\ud569\ub2c8\ub2e4.",
    "started.s1.title": "\uc0ac\uc804 \uc694\uad6c\uc0ac\ud56d",
    "started.s1.desc": "<strong>OpenCode</strong>\uc640 CLI, Python SDK, \ub610\ub294 Direct HTTP\ub97c \ud1b5\ud55c <strong>Firecrawl</strong> \uc811\uadfc\uc774 \ud544\uc694\ud569\ub2c8\ub2e4.",
    "started.s2.title": "\uc2a4\ud0ac \uc124\uce58",
    "started.s2.desc": "<code>references/</code> \ud3f4\ub354\ub97c \ud3ec\ud568\ud55c v4.5 \uc2a4\ud0ac \ud30c\uc77c\uc744 OpenCode skills \ub514\ub809\ud1a0\ub9ac\uc5d0 \uc124\uce58\ud558\uc138\uc694.",
    "started.s3.title": "\ubb3c\uc5b4\ubcf4\uae30",
    "started.s3.desc": "\uc790\uc5f0\uc5b4\ub85c \uc9c8\ubb38\ud558\uc138\uc694: <em>\u201c2026\ub144 React vs Vue \uc131\ub2a5\uc744 \ube44\uad50\ud558\uace0 \uc57d\ud55c \uadfc\uac70\ub294 \ud45c\uc2dc\ud574\uc918\u201d</em> \u2014 \ub098\uba38\uc9c0\ub294 Argus\uac00 \ucc98\ub9ac\ud569\ub2c8\ub2e4.",
    "started.triggers.title": "\ud2b8\ub9ac\uac70 \ud0a4\uc6cc\ub4dc",
    "footer.desc": "OpenCode\ub97c \uc704\ud55c \uc2ec\uce35 \uc6f9 \ub9ac\uc11c\uce58 \uc2a4\ud0ac.",
    "footer.docs": "v4.5 \ub9b4\ub9ac\uc988",
    "meta.title": "Argus \u2014 OpenCode\ub97c \uc704\ud55c \uadfc\uac70 \ubcf4\uc815 \ub9ac\uc11c\uce58",
    "meta.desc": "Argus v4.5\ub294 OpenCode\ub97c \uc704\ud55c \uadfc\uac70 \ubcf4\uc815 \uc2ec\uce35 \uc6f9 \ub9ac\uc11c\uce58 \uc2a4\ud0ac\uc785\ub2c8\ub2e4. \uc8fc\uc7a5 \uc2e0\ub8b0\ub3c4\ub97c \ubd84\ub958\ud558\uace0, \ucd9c\ucc98 \ud488\uc9c8\uc744 \uc810\uac80\ud558\uba70, \uc8fc\uc694 \uc8fc\uc7a5\uc744 \uc778\uc6a9\ud569\ub2c8\ub2e4."
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
