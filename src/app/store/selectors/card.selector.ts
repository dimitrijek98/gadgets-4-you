import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CardState } from '../reducers/card.reducer';

export const selectAuthState = createFeatureSelector<CardState>('card');

export const isPaymentFail = createSelector(
    selectAuthState,
    (card) => card.paymentFail
);
