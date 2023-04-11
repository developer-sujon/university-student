//Internal Lib Import
import { apiService } from './baseQuery';

export const subjectRepetitionService = apiService.injectEndpoints({
  endpoints: (builder) => ({
    subjectRepetitionList: builder.query({
      query: () => ({
        url: 'subjectRepetition/subjectRepetitionList',
        method: 'GET',
      }),
    }),
    subjectRepetitionCreate: builder.mutation({
      query: (postBody) => ({
        url: 'subjectRepetition/subjectRepetitionCreate',
        method: 'POST',
        body: postBody,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(
            apiService.util.updateQueryData('subjectRepetitionList', undefined, (draft) => {
              draft.data.push(data.data);
            })
          );
          //dispatch(dashboardService.endpoints.dashboardSummary.initiate());
        } catch {}
      },
    }),

    subjectRepetitionUpdate: builder.mutation({
      query: ({ id, postBody }) => ({
        url: `subjectRepetition/subjectRepetitionUpdate/${id}`,
        method: 'PATCH',
        body: postBody,
      }),

      async onQueryStarted({ id, postBody }, { dispatch, queryFulfilled }) {
        const patchsubjectRepetition = dispatch(
          apiService.util.updateQueryData('subjectRepetitionList', undefined, (draft) => {
            const findIndex = draft.data.findIndex((role) => role.id === id);
            draft.data[findIndex].title = postBody.title;
            draft.data[findIndex].status = postBody.status;
            draft.data[findIndex].dueDate = postBody.dueDate;
            draft.data[findIndex].descriptions = postBody.descriptions;
          })
        );

        try {
          await queryFulfilled;
          //dispatch(dashboardService.endpoints.dashboardSummary.initiate());
        } catch {
          patchsubjectRepetition.undo();
        }
      },
    }),
    subjectRepetitionDelete: builder.mutation({
      query: (id) => ({
        url: `subjectRepetition/subjectRepetitionDelete/${id}`,
        method: 'DELETE',
      }),

      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        const patchsubjectRepetition = dispatch(
          apiService.util.updateQueryData('subjectRepetitionList', undefined, (draft) => {
            draft.data = draft.data.filter((role) => role.id !== id);
          })
        );

        try {
          await queryFulfilled;
        } catch {
          patchsubjectRepetition.undo();
        }
      },
    }),
  }),
});

export const {
  useSubjectRepetitionCreateMutation,
  useSubjectRepetitionListQuery,
  useSubjectRepetitionUpdateMutation,
  useSubjectRepetitionDeleteMutation,
} = subjectRepetitionService;
