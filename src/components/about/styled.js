import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 60px 16px;
    `,

    Container: styled.div`
        width: 100%;
        max-width: 1100px;
        display: flex;
        flex-direction: column;
        gap: 30px;
    `,

    Header: styled.h1`
        font-size: 34px;
        font-weight: 900;
        color: var(--color-text-primary);
    `,

    SubHeader: styled.p`
        font-size: 16px;
        color: var(--color-text-secondary);
        max-width: 720px;
        line-height: 1.6;
    `,

    Grid: styled.div`
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        gap: 18px;
    `,

    Card: styled.div`
        background: linear-gradient(
            180deg,
            var(--color-surface),
            var(--color-surface-2)
        );

        border: 1px solid var(--color-border);
        border-radius: 14px;
        padding: 22px;

        display: flex;
        flex-direction: column;
        gap: 10px;

        box-shadow: 0 10px 24px var(--color-shadow);

        transition:
            transform 0.15s ease,
            border-color 0.15s ease;

        &:hover {
            transform: translateY(-3px);
            border-color: var(--color-border-light);
        }

        .icon {
            font-size: 22px;
            color: var(--color-primary);
            display: inline-flex;
        }

        .title {
            font-weight: 800;
            color: var(--color-text-primary);
        }

        p {
            font-size: 14px;
            color: var(--color-text-secondary);
            line-height: 1.5;
        }
    `,
};
