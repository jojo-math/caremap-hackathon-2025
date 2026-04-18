# Diagramme dependances tickets

```mermaid
graph TD
    T1[CM-CORE-001] --> T2[CM-DATA-002]
    T2 --> T3[CM-BE-003]
    T2 --> T4[CM-BE-004]
    T3 --> T5[CM-FE-005]
    T5 --> T6[CM-FE-006]
    T3 --> T6
    T5 --> T7[CM-FE-007]
    T4 --> T7
    T6 --> T8[CM-FE-008]
    T7 --> T8
    T7 --> T9[CM-FE-009]
    T8 --> T10[CM-QA-010]
    T9 --> T10
    T10 --> T11[CM-PITCH-011]
```

## Sequence implementation
1. CM-CORE-001
2. CM-DATA-002
3. CM-BE-003 et CM-BE-004 (en parallele)
4. CM-FE-005
5. CM-FE-006 et CM-FE-007
6. CM-FE-008
7. CM-FE-009
8. CM-QA-010
9. CM-PITCH-011g
