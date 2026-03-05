// src/topics/tdd/styled.js
import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 14px;
        padding: 18px 0;
    `,

    HeaderRow: styled.div`
        width: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 16px;

        padding: 18px 16px;
        border-radius: 16px;

        border: 1px solid var(--color-border);
        background: linear-gradient(
            180deg,
            var(--color-surface),
            var(--color-surface-2)
        );
        box-shadow: 0 12px 26px var(--color-shadow);

        position: relative;
        overflow: hidden;

        &::before {
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;
            background-image:
                radial-gradient(
                    760px 260px at 12% 0%,
                    color-mix(in srgb, var(--color-primary) 14%, transparent),
                    transparent 68%
                ),
                radial-gradient(
                    640px 240px at 90% 10%,
                    color-mix(in srgb, var(--color-accent) 10%, transparent),
                    transparent 70%
                );
            opacity: 0.65;
        }

        .left {
            min-width: 0;
            display: flex;
            flex-direction: column;
            gap: 10px;
            position: relative;
            z-index: 1;
        }

        .kicker {
            display: inline-flex;
            align-items: center;
            gap: 8px;

            color: var(--color-text-muted);
            font-weight: 800;
            font-size: 12px;
            letter-spacing: 0.2px;

            .kIcon {
                display: inline-flex;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 80%,
                    var(--color-text-primary)
                );
            }
        }

        .title {
            font-size: 22px;
            font-weight: 900;
            color: var(--color-text-primary);
            line-height: 1.15;
        }

        .subTitle {
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.6;
            max-width: 880px;
        }

        .chipRow {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 2px;
        }

        .chip {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 7px 10px;
            border-radius: 999px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                transparent
            );

            color: var(--color-text-secondary);
            font-size: 12.5px;
            font-weight: 800;

            box-shadow: 0 10px 22px var(--color-shadow);

            .cIcon {
                display: inline-flex;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 80%,
                    var(--color-text-primary)
                );
            }

            svg {
                width: 14px;
                height: 14px;
            }
        }

        .toggleBtn {
            position: relative;
            z-index: 1;

            display: inline-flex;
            align-items: center;
            gap: 10px;

            padding: 10px 12px;
            border-radius: 14px;

            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            border: 1px solid var(--color-border);
            color: var(--color-text-primary);

            box-shadow: 0 10px 22px var(--color-shadow);

            transition:
                transform 140ms ease,
                border-color 140ms ease;

            &:hover {
                border-color: var(--color-border-light);
            }

            &:active {
                transform: translateY(1px);
            }

            .tLabel {
                font-size: 13px;
                font-weight: 900;
                color: var(--color-text-secondary);
            }

            .tIcon {
                display: inline-flex;
                font-size: 18px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 80%,
                    var(--color-text-primary)
                );
                transition: transform 180ms ease;
            }

            .tIcon.rot {
                transform: rotate(180deg);
            }

            @media (width < 420px) {
                .tLabel {
                    display: none;
                }
            }
        }
    `,

    Panel: styled.div`
        border: 1px solid var(--color-border);
        border-radius: 16px;
        overflow: hidden;

        background: color-mix(in srgb, var(--color-surface) 70%, transparent);
        box-shadow: 0 14px 30px var(--color-shadow);

        transform-origin: top;
        transition:
            max-height 260ms ease,
            opacity 200ms ease,
            transform 200ms ease;

        &[data-open="false"] {
            max-height: 0px;
            opacity: 0;
            transform: translateY(-4px);
            pointer-events: none;
        }

        &[data-open="true"] {
            max-height: 5200px;
            opacity: 1;
            transform: translateY(0px);
            pointer-events: auto;
        }

        .grid {
            padding: 16px;
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 14px;

            @media (width < 900px) {
                grid-template-columns: repeat(6, 1fr);
            }

            @media (width < 560px) {
                grid-template-columns: repeat(1, 1fr);
            }
        }

        .card {
            grid-column: span 6;

            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            border: 1px solid var(--color-border);
            border-radius: 16px;
            padding: 16px;

            display: flex;
            flex-direction: column;
            gap: 10px;

            box-shadow: 0 12px 24px var(--color-shadow);

            transition:
                transform 140ms ease,
                border-color 140ms ease;

            &:hover {
                transform: translateY(-2px);
                border-color: var(--color-border-light);
            }

            @media (width < 900px) {
                grid-column: span 6;
            }

            @media (width < 560px) {
                grid-column: span 1;
            }
        }

        .card.wide {
            grid-column: span 12;

            @media (width < 900px) {
                grid-column: span 6;
            }

            @media (width < 560px) {
                grid-column: span 1;
            }
        }

        .cardTitle {
            display: flex;
            align-items: center;
            gap: 10px;

            font-weight: 900;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;

            .i {
                display: inline-flex;
                align-items: center;
                justify-content: center;

                width: 34px;
                height: 34px;
                border-radius: 12px;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 82%,
                    transparent
                );

                color: color-mix(
                    in srgb,
                    var(--color-primary) 80%,
                    var(--color-text-primary)
                );
                box-shadow: 0 10px 22px var(--color-shadow);
            }

            svg {
                width: 16px;
                height: 16px;
            }
        }

        .text {
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.65;
        }

        .list {
            display: flex;
            flex-direction: column;
            gap: 8px;

            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.55;

            li {
                padding-left: 10px;
                position: relative;
            }
        }

        .code {
            margin-top: 2px;
            padding: 14px;
            border-radius: 14px;

            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);

            color: color-mix(in srgb, var(--color-text-primary) 92%, #ffffff);
            font-size: 12.5px;
            line-height: 1.55;

            overflow: auto;
            box-shadow: inset 0 0 0 1px
                color-mix(in srgb, var(--color-border) 30%, transparent);
        }

        .note {
            padding: 12px 12px;
            border-radius: 14px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 80%,
                transparent
            );

            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;

            box-shadow: 0 12px 24px var(--color-shadow);
        }

        .flow {
            display: flex;
            flex-direction: column;
            gap: 10px;

            .step {
                display: grid;
                grid-template-columns: 160px 1fr;
                gap: 12px;

                padding: 10px 12px;
                border-radius: 14px;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface-2) 76%,
                    transparent
                );

                @media (width < 560px) {
                    grid-template-columns: 1fr;
                }
            }

            .badge {
                display: inline-flex;
                align-items: center;
                gap: 10px;

                padding: 8px 10px;
                border-radius: 999px;
                width: fit-content;

                border: 1px solid var(--color-border);
                background: color-mix(
                    in srgb,
                    var(--color-surface) 70%,
                    transparent
                );

                font-weight: 900;
                color: var(--color-text-primary);

                svg {
                    width: 16px;
                    height: 16px;
                }
            }

            .badge.red {
                box-shadow: 0 0 0 1px
                    color-mix(in srgb, var(--color-error) 18%, transparent);
            }

            .badge.green {
                box-shadow: 0 0 0 1px
                    color-mix(in srgb, var(--color-success) 18%, transparent);
            }

            .badge.refactor {
                box-shadow: 0 0 0 1px
                    color-mix(in srgb, var(--color-primary) 18%, transparent);
            }

            .desc {
                color: var(--color-text-secondary);
                font-size: 14px;
                line-height: 1.55;
            }
        }

        .inlineCode {
            padding: 2px 8px;
            border-radius: 999px;
            border: 1px solid var(--color-code-border);
            background: color-mix(
                in srgb,
                var(--color-code-bg) 82%,
                transparent
            );
            color: var(--color-text-primary);
            font-weight: 900;
            font-size: 12.5px;
        }

        .footerHint {
            display: flex;
            align-items: center;
            gap: 10px;

            padding: 14px 16px 18px 16px;

            border-top: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 78%,
                transparent
            );

            color: var(--color-text-secondary);
            font-weight: 800;
            font-size: 13px;

            .hIcon {
                display: inline-flex;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 80%,
                    var(--color-text-primary)
                );
            }
        }
    `,
};
